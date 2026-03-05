import React from 'react';
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
import Svg, { Path, Circle, Rect } from 'react-native-svg';

const LeafIcon = ({ color = '#2e7f32', size = 16 }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <Path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 8a7 7 0 0 1-9 10Z" />
        <Path d="M7 21c0-6.05 2-10 7-15" />
    </Svg>
);

const BulbIcon = ({ color = '#2e7f32', size = 30 }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <Path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5" />
        <Path d="M9 18h6" />
        <Path d="M10 22h4" />
    </Svg>
);

const ActivityIcon = ({ type, color = '#2e7f32', size = 24 }) => {
    switch (type) {
        case 'park':
            return (
                <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <Path d="M12 2v8" />
                    <Path d="M9 21v-5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5" />
                    <Path d="M12 10L6 10C4 10 3 11 3 13C3 15 5 15 5 15L5 18L19 18L19 15C19 15 21 15 21 13C21 11 20 10 18 10L12 10Z" />
                </Svg>
            );
        case 'recycle':
            return (
                <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <Path d="M7 11V7l-5 5 5 5v-4h3a7 7 0 0 1 7 7h2a9 9 0 0 0-9-9H7Z" />
                    <Path d="M17 13v4l5-5-5-5v4h-3a7 7 0 0 0-7-7H5a9 9 0 0 1 9 9h3Z" />
                </Svg>
            );
        case 'bike':
            return (
                <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <Circle cx="5.5" cy="17.5" r="3.5" />
                    <Circle cx="18.5" cy="17.5" r="3.5" />
                    <Path d="M15 13.5L13.5 9v1.5h-5V9l-1.5 4.5" />
                    <Path d="M16 11l-2-2 1-1" />
                </Svg>
            );
        case 'water':
            return (
                <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <Path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7Z" />
                </Svg>
            );
        default:
            return null;
    }
};

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor="#f6f8f6" />
            <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View style={styles.header}>
                    <View>
                        <Text style={styles.greeting}>Good Morning, Jeeva 🌱</Text>
                        <View style={styles.scoreBadge}>
                            <LeafIcon color="#FFF" size={12} />
                            <Text style={styles.scoreText}>120 Eco Score</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.profileContainer}>
                        <Image
                            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1_YsVMkllGb1L-GFekbtZKQr2HLgkslaOvlQEwd69aSKJQr-q9pRztnMKX_5z_sI22eOCxksyliT6TVooRvTfGvGWdjbDRPUMEVA27jNgIsLq4x5-vwUSyA01Xpf5wojh5AhJeaIcDHDogpgjk4KnRzAHgIcs14tl6RFigX-H-t3yeeygreJvHSu92ioWBlWYDtGIZlXwW-ugzvspeDJtTZMKGhCpilcB7zvDinYh0Q2qJtmB4UtxUmzvPJTQNTjb54Tg6HzWerQ' }}
                            style={styles.profileImage}
                        />
                    </TouchableOpacity>
                </View>

                {/* Eco Tip Card */}
                <View style={styles.tipCard}>
                    <View style={styles.tipIconContainer}>
                        <BulbIcon />
                    </View>
                    <View style={styles.tipTextContainer}>
                        <Text style={styles.tipTitle}>Eco Tip of the Day 🌿</Text>
                        <Text style={styles.tipDescription}>Turn off lights when leaving a room to save electricity.</Text>
                    </View>
                </View>

                {/* Quick Actions */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Quick Actions</Text>
                    <View style={styles.quickActionsGrid}>
                        <TouchableOpacity style={styles.actionButton}>
                            <Svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <Path d="M12 5v14M5 12h14" />
                            </Svg>
                            <Text style={styles.actionButtonText}>Log Activity</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actionButton}>
                            <Svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <Path d="M12 3v10" />
                                <Path d="M16.7 8a5.5 5.5 0 0 0-9.4 0" />
                                <Path d="M2 22l4-4" />
                                <Path d="M22 22l-4-4" />
                            </Svg>
                            <Text style={styles.actionButtonText}>View Initiatives</Text>
                        </TouchableOpacity>
                    </View> section
                </View>

                {/* Eco Activities */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Eco Activities</Text>
                        <TouchableOpacity>
                            <Text style={styles.seeAllText}>See All</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.activitiesGrid}>
                        <ActivityCard icon="park" title="Plant Tree" points="+20 Points" bgColor="#e8f5e9" iconColor="#2e7f32" />
                        <ActivityCard icon="recycle" title="Recycle Waste" points="+10 Points" bgColor="#e3f2fd" iconColor="#1976d2" />
                        <ActivityCard icon="bike" title="Use Bicycle" points="+5 Points" bgColor="#fff3e0" iconColor="#f57c00" />
                        <ActivityCard icon="water" title="Save Water" points="+8 Points" bgColor="#e0f7fa" iconColor="#0097a7" />
                    </View>
                </View>

                <View style={{ height: 100 }} />
            </ScrollView>

            {/* Floating Action Button */}
            <TouchableOpacity style={styles.fab}>
                <Svg width={30} height={30} viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <Path d="M12 5v14M5 12h14" />
                </Svg>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const ActivityCard = ({ icon, title, points, bgColor, iconColor }) => (
    <TouchableOpacity style={styles.activityCard}>
        <View style={[styles.activityIconWrapper, { backgroundColor: bgColor }]}>
            <ActivityIcon type={icon} color={iconColor} />
        </View>
        <Text style={styles.activityTitle}>{title}</Text>
        <View style={styles.pointsBadge}>
            <Text style={styles.pointsText}>{points}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f6f8f6',
    },
    container: {
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 25,
        backgroundColor: 'rgba(46, 127, 50, 0.05)',
        padding: 20,
        borderRadius: 24,
        marginTop: 10,
    },
    greeting: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1e293b',
    },
    scoreBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2e7f32',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        marginTop: 8,
        alignSelf: 'flex-start',
    },
    scoreText: {
        color: '#FFF',
        fontSize: 12,
        fontWeight: 'bold',
        marginLeft: 4,
    },
    profileContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: 'rgba(46, 127, 50, 0.2)',
        overflow: 'hidden',
        padding: 2,
    },
    profileImage: {
        width: '100%',
        height: '100%',
        borderRadius: 25,
    },
    tipCard: {
        backgroundColor: '#FFF',
        borderRadius: 20,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#2e7f32',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.05,
        shadowRadius: 15,
        elevation: 5,
        borderWidth: 1,
        borderColor: 'rgba(46, 127, 50, 0.05)',
        marginBottom: 30,
    },
    tipIconContainer: {
        backgroundColor: 'rgba(46, 127, 50, 0.1)',
        padding: 12,
        borderRadius: 15,
        marginRight: 15,
    },
    tipTextContainer: {
        flex: 1,
    },
    tipTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1e293b',
        marginBottom: 4,
    },
    tipDescription: {
        fontSize: 14,
        color: '#64748b',
        lineHeight: 20,
    },
    section: {
        marginBottom: 30,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1e293b',
        marginBottom: 15,
    },
    seeAllText: {
        color: '#2e7f32',
        fontSize: 14,
        fontWeight: '600',
    },
    quickActionsGrid: {
        flexDirection: 'row',
        gap: 12,
    },
    actionButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2e7f32',
        paddingVertical: 14,
        borderRadius: 16,
        gap: 8,
        shadowColor: '#2e7f32',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 3,
    },
    actionButtonText: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: 'bold',
    },
    activitiesGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
    },
    activityCard: {
        width: '48%',
        backgroundColor: '#FFF',
        borderRadius: 20,
        padding: 16,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.03)',
    },
    activityIconWrapper: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
    },
    activityTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1e293b',
        marginBottom: 8,
    },
    pointsBadge: {
        backgroundColor: 'rgba(46, 127, 50, 0.1)',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
    },
    pointsText: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#2e7f32',
    },
    fab: {
        position: 'absolute',
        bottom: 30,
        right: 25,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#2e7f32',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#2e7f32',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.4,
        shadowRadius: 10,
        elevation: 10,
    },
});

export default HomeScreen;
