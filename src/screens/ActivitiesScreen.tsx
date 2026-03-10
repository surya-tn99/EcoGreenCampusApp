import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image,
    SafeAreaView,
    StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ActivityIcon = ({ type, color = '#2e7f32', size = 28 }: { type: string, color?: string, size?: number }) => {

    const iconBaseStyle: any = { width: size, height: size, alignItems: 'center', justifyContent: 'center' };

    switch (type) {
        case 'delete_sweep':
            return (
                <View style={iconBaseStyle}>
                    <View style={{ width: size * 0.7, height: size * 0.1, backgroundColor: color, marginBottom: 2 }} />
                    <View style={{ width: size * 0.5, height: size * 0.4, borderWidth: 2, borderColor: color, borderTopWidth: 0 }} />
                </View>
            );
        case 'potted_plant':
            return (
                <View style={iconBaseStyle}>
                    <View style={{ width: size * 0.5, height: size * 0.5, borderRadius: size * 0.25, borderTopLeftRadius: size * 0.5, borderTopRightRadius: size * 0.5, backgroundColor: color }} />
                    <View style={{ width: size * 0.4, height: size * 0.3, backgroundColor: '#8d6e63', marginTop: 1 }} />
                </View>
            );
        case 'pedal_bike':
            return (
                <View style={iconBaseStyle}>
                    <View style={{ flexDirection: 'row', gap: 4 }}>
                        <View style={{ width: size * 0.35, height: size * 0.35, borderRadius: size * 0.175, borderWidth: 2, borderColor: color }} />
                        <View style={{ width: size * 0.35, height: size * 0.35, borderRadius: size * 0.175, borderWidth: 2, borderColor: color }} />
                    </View>
                </View>
            );
        case 'water_drop':
            return (
                <View style={iconBaseStyle}>
                    <View style={{ width: size * 0.4, height: size * 0.6, borderRadius: size * 0.2, backgroundColor: color, transform: [{ scaleY: 1.5 }] }} />
                </View>
            );
        case 'lightbulb':
            return (
                <View style={iconBaseStyle}>
                    <View style={{ width: size * 0.5, height: size * 0.5, borderRadius: size * 0.25, borderWidth: 2, borderColor: color }} />
                    <View style={{ width: size * 0.3, height: size * 0.1, backgroundColor: color, marginTop: 2 }} />
                </View>
            );
        case 'no_photography':
            return (
                <View style={iconBaseStyle}>
                    <View style={{ width: size * 0.7, height: size * 0.5, borderRadius: 2, borderWidth: 2, borderColor: color }} />
                    <View style={{ position: 'absolute', width: size, height: 2, backgroundColor: color, transform: [{ rotate: '45deg' }] }} />
                </View>
            );
        default:
            return null;
    }
};

const ActivitiesScreen = () => {
    const navigation = useNavigation<any>();
    const [activeCategory, setActiveCategory] = useState('All');
    const [score, setScore] = useState(120);
    const [completedIndices, setCompletedIndices] = useState<string[]>([]);

    const categories = [
        'All',
        'Waste Management',
        'Energy Saving',
        'Green Transport',
        'Water Conservation',
        'Plantation',
    ];

    const activities = [
        { title: 'Recycle Waste', category: 'Waste Management', icon: 'delete_sweep', points: '+10 Points', description: 'Properly sort your dry and wet waste.', buttonText: 'Log Activity', primary: false },
        { title: 'Plant a Tree', category: 'Plantation', icon: 'potted_plant', points: '+20 Points', description: 'Plant a sapling on campus or at home.', buttonText: 'Log Activity', primary: true },
        { title: 'Use Bicycle', category: 'Green Transport', icon: 'pedal_bike', points: '+5 Points', description: 'Ride to your classes instead of driving.', buttonText: 'Log Activity', primary: false },
        { title: 'Save Water', category: 'Water Conservation', icon: 'water_drop', points: '+8 Points', description: 'Fix a leak or reduce usage today.', buttonText: 'Log Activity', primary: false },
        { title: 'Save Electricity', category: 'Energy Saving', icon: 'lightbulb', points: '+7 Points', description: 'Turn off lights when leaving the room.', buttonText: 'Log Activity', primary: false },
        { title: 'Avoid Plastic', category: 'Waste Management', icon: 'no_photography', points: '+6 Points', description: 'Use a refillable bottle or cloth bag.', buttonText: 'Log Activity', primary: false },
    ];

    const handleLogActivity = (title: string, points: string) => {
        const pts = parseInt(points.replace(/[^0-9]/g, ''));
        if (completedIndices.includes(title as any)) {
            // Toggle off
            setScore(prev => prev - pts);
            setCompletedIndices(prev => prev.filter(t => t !== (title as any)));
        } else {
            // Toggle on
            setScore(prev => prev + pts);
            setCompletedIndices(prev => [...prev, title as any]);
        }
    };

    const filteredActivities = activeCategory === 'All'
        ? activities
        : activities.filter(a => a.category === activeCategory);

    const completedCount = 2 + completedIndices.length;
    const progressPercent = (completedCount / 5) * 100;

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor="#f6f8f6" />

            <View style={styles.header}>
                <View>
                    <Text style={styles.headerTitle}>Eco Activities 🌱</Text>
                    <Text style={styles.headerSubtitle}>Choose an activity and earn eco points</Text>
                </View>
                <TouchableOpacity
                    style={styles.profileContainer}
                    onPress={() => navigation.navigate('Profile')}
                >
                    <Image
                        source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1_YsVMkllGb1L-GFekbtZKQr2HLgkslaOvlQEwd69aSKJQr-q9pRztnMKX_5z_sI22eOCxksyliT6TVooRvTfGvGWdjbDRPUMEVA27jNgIsLq4x5-vwUSyA01Xpf5wojh5AhJeaIcDHDogpgjk4KnRzAHgIcs14tl6RFigX-H-t3yeeygreJvHSu92ioWBlWYDtGIZlXwW-ugzvspeDJtTZMKGhCpilcB7zvDinYh0Q2qJtmB4UtxUmzvPJTQNTjb54Tg6HzWerQ' }}
                        style={styles.profileImage}
                    />
                </TouchableOpacity>

            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                {/* Progress Card */}
                <View style={styles.progressCard}>
                    <View style={styles.progressHeader}>
                        <View>
                            <Text style={styles.progressLabel}>Today's Progress</Text>
                            <Text style={styles.progressValue}>Activities Completed: {completedCount}</Text>
                        </View>
                        <View style={styles.pointsBadge}>
                            <Text style={styles.pointsText}>Score: {score}</Text>
                        </View>
                    </View>
                    <View style={styles.progressBarContainer}>
                        <View style={styles.progressBarLabels}>
                            <Text style={styles.progressBarTitle}>Daily Goal Progress</Text>
                            <Text style={styles.progressBarPercent}>{completedCount}/5</Text>
                        </View>
                        <View style={styles.progressBarTrack}>
                            <View style={[styles.progressBarFill, { width: `${Math.min(progressPercent, 100)}%` }]} />
                        </View>
                        <Text style={styles.progressFooter}>
                            {completedCount >= 5 ? 'Goal Reached! Great job!' : `Almost there! ${5 - completedCount} more to reach your goal.`}
                        </Text>
                    </View>
                </View>

                {/* Report Complaint Button */}
                <TouchableOpacity
                    style={styles.reportButton}
                    onPress={() => navigation.navigate('ComplaintScreen')}
                >
                    <Text style={styles.reportButtonText}>Report Complaint 🚨</Text>
                </TouchableOpacity>


                {/* Categories */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesScroll} contentContainerStyle={styles.categoriesContent}>
                    {categories.map((cat) => (
                        <TouchableOpacity
                            key={cat}
                            onPress={() => setActiveCategory(cat)}
                            style={[
                                styles.categoryTab,
                                activeCategory === cat && styles.categoryTabActive,
                            ]}
                        >
                            <Text
                                style={[
                                    styles.categoryText,
                                    activeCategory === cat && styles.categoryTextActive,
                                ]}
                            >
                                {cat}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* Activity Grid */}
                <View style={styles.grid}>
                    {filteredActivities.map((activity, index) => {
                        const isCompleted = completedIndices.includes(activity.title as any);
                        return (
                            <View key={activity.title} style={styles.card}>
                                <View style={styles.cardIconWrapper}>
                                    <ActivityIcon type={activity.icon} />
                                </View>
                                <Text style={styles.cardTitle}>{activity.title}</Text>
                                <Text style={styles.cardPoints}>{activity.points}</Text>
                                <Text style={styles.cardDesc}>{activity.description}</Text>
                                <TouchableOpacity
                                    onPress={() => handleLogActivity(activity.title, activity.points)}
                                    style={[
                                        styles.logButton,
                                        isCompleted ? { backgroundColor: '#e2e8f0' } : (activity.primary ? styles.logButtonPrimary : styles.logButtonSecondary),
                                    ]}
                                >
                                    <Text
                                        style={[
                                            styles.logButtonText,
                                            isCompleted ? { color: '#94a3b8' } : (activity.primary ? styles.logButtonTextPrimary : styles.logButtonTextSecondary),
                                        ]}
                                    >
                                        {isCompleted ? 'Completed ✅' : activity.buttonText}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        );
                    })}
                </View>

            </ScrollView>

            {/* FAB - Using View based icons */}
            <TouchableOpacity
                style={styles.fab}
                onPress={() => navigation.navigate('AddActivity')}
            >

                <View style={{ width: 30, height: 30, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: 24, height: 4, backgroundColor: '#FFF', borderRadius: 2 }} />
                    <View style={{ position: 'absolute', width: 4, height: 24, backgroundColor: '#FFF', borderRadius: 2 }} />
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f6f8f6',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingHorizontal: 24,
        paddingTop: 50,
        paddingBottom: 16,
    },

    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1e293b',
    },
    headerSubtitle: {
        fontSize: 14,
        color: '#2e7f32',
        fontWeight: '600',
        marginTop: 4,
    },
    profileContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'rgba(46, 127, 50, 0.2)',
        overflow: 'hidden',
    },
    profileImage: {
        width: '100%',
        height: '100%',
    },
    scrollContent: {
        paddingBottom: 50,
    },

    progressCard: {
        marginHorizontal: 24,
        backgroundColor: '#FFF',
        borderRadius: 20,
        padding: 20,
        borderWidth: 1,
        borderColor: 'rgba(46, 127, 50, 0.1)',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
        marginBottom: 16,
    },
    progressHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 20,
    },
    progressLabel: {
        fontSize: 14,
        color: '#64748b',
        fontWeight: '500',
    },
    progressValue: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1e293b',
        marginTop: 4,
    },
    pointsBadge: {
        backgroundColor: 'rgba(46, 127, 50, 0.1)',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
    },
    pointsText: {
        color: '#2e7f32',
        fontSize: 14,
        fontWeight: 'bold',
    },
    progressBarContainer: {
        gap: 8,
    },
    progressBarLabels: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    progressBarTitle: {
        fontSize: 12,
        fontWeight: '600',
        color: '#2e7f32',
    },
    progressBarPercent: {
        fontSize: 12,
        fontWeight: '600',
        color: '#2e7f32',
    },
    progressBarTrack: {
        height: 10,
        backgroundColor: 'rgba(46, 127, 50, 0.2)',
        borderRadius: 5,
        overflow: 'hidden',
    },
    progressBarFill: {
        height: '100%',
        backgroundColor: '#2e7f32',
        borderRadius: 5,
    },
    progressFooter: {
        fontSize: 10,
        color: '#94a3b8',
        fontStyle: 'italic',
        textAlign: 'right',
    },
    reportButton: {
        marginHorizontal: 24,
        backgroundColor: '#fff1f1',
        borderWidth: 1,
        borderColor: '#fee2e2',
        borderRadius: 16,
        paddingVertical: 14,
        alignItems: 'center',
        marginBottom: 20,
    },
    reportButtonText: {
        color: '#ef4444',
        fontSize: 14,
        fontWeight: 'bold',
    },
    categoriesScroll: {
        paddingLeft: 24,
        marginBottom: 24,
    },
    categoriesContent: {
        paddingRight: 48,
        gap: 8,
    },
    categoryTab: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#e2e8f0',
    },
    categoryTabActive: {
        backgroundColor: '#2e7f32',
        borderColor: '#2e7f32',
    },
    categoryText: {
        fontSize: 14,
        color: '#64748b',
        fontWeight: '500',
    },
    categoryTextActive: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 24,
        gap: 16,
    },
    card: {
        width: '47%',
        backgroundColor: '#FFF',
        borderRadius: 20,
        padding: 16,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#f1f5f9',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
    },
    cardIconWrapper: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: 'rgba(46, 127, 50, 0.1)',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
    },
    cardTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#1e293b',
        textAlign: 'center',
    },
    cardPoints: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#2e7f32',
        marginTop: 4,
    },
    cardDesc: {
        fontSize: 11,
        color: '#64748b',
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 16,
        lineHeight: 16,
    },
    logButton: {
        width: '100%',
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 'auto',
    },
    logButtonPrimary: {
        backgroundColor: '#2e7f32',
    },
    logButtonSecondary: {
        backgroundColor: 'rgba(46, 127, 50, 0.1)',
    },
    logButtonText: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    logButtonTextPrimary: {
        color: '#FFF',
    },
    logButtonTextSecondary: {
        color: '#2e7f32',
    },
    fab: {
        position: 'absolute',
        bottom: 30,
        right: 25,
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: '#2e7f32',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#2e7f32',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 5,
        zIndex: 10,
    },
});

export default ActivitiesScreen;
