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

const LeafIcon = ({ color = '#2e7f32', size = 16 }: { color?: string, size?: number }) => (

    <View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ width: size * 0.8, height: size * 0.8, borderTopLeftRadius: size * 0.8, borderBottomRightRadius: size * 0.8, borderWidth: size * 0.1, borderColor: color, backgroundColor: 'rgba(46, 127, 50, 0.2)' }} />
    </View>
);

const BulbIcon = ({ color = '#2e7f32', size = 30 }: { color?: string, size?: number }) => (

    <View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ width: size * 0.5, height: size * 0.5, borderRadius: size * 0.25, borderWidth: 2, borderColor: color }} />
        <View style={{ width: size * 0.3, height: size * 0.1, backgroundColor: color, marginTop: 2 }} />
    </View>
);

const ActivityIcon = ({ type, color = '#2e7f32', size = 24 }: { type: string, color?: string, size?: number }) => {

    const iconBaseStyle: any = { width: size, height: size, alignItems: 'center', justifyContent: 'center' };
    switch (type) {
        case 'park':
            return (
                <View style={iconBaseStyle}>
                    <View style={{ width: 0, height: 0, borderLeftWidth: size * 0.4, borderRightWidth: size * 0.4, borderBottomWidth: size * 0.6, borderLeftColor: 'transparent', borderRightColor: 'transparent', borderBottomColor: color }} />
                    <View style={{ width: size * 0.15, height: size * 0.3, backgroundColor: color }} />
                </View>
            );
        case 'recycle':
            return (
                <View style={iconBaseStyle}>
                    <View style={{ width: size * 0.6, height: size * 0.6, borderRadius: size * 0.3, borderWidth: 2, borderColor: color, borderStyle: 'dotted' }} />
                </View>
            );
        case 'bike':
            return (
                <View style={iconBaseStyle}>
                    <View style={{ flexDirection: 'row', gap: 4 }}>
                        <View style={{ width: size * 0.35, height: size * 0.35, borderRadius: size * 0.175, borderWidth: 2, borderColor: color }} />
                        <View style={{ width: size * 0.35, height: size * 0.35, borderRadius: size * 0.175, borderWidth: 2, borderColor: color }} />
                    </View>
                </View>
            );
        case 'water':
            return (
                <View style={iconBaseStyle}>
                    <View style={{ width: size * 0.4, height: size * 0.6, borderRadius: size * 0.2, backgroundColor: color, transform: [{ scaleY: 1.5 }] }} />
                </View>
            );
        default:
            return null;
    }
};

const HomeScreen = () => {
    const [ecoScore, setEcoScore] = React.useState(120);

    const handleActivityPress = (points: string) => {
        const pts = parseInt(points.replace(/[^0-9]/g, ''));
        setEcoScore(prev => prev + pts);
    };

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
                            <Text style={styles.scoreText}>{ecoScore} Eco Score</Text>
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
                {/* <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Quick Actions</Text>
                    <View style={styles.quickActionsGrid}>
                        <TouchableOpacity style={styles.actionButton}>
                            <View style={{ width: 18, height: 18, alignItems: 'center', justifyContent: 'center' }}>
                                <View style={{ width: 14, height: 2, backgroundColor: '#FFF' }} />
                                <View style={{ position: 'absolute', width: 2, height: 14, backgroundColor: '#FFF' }} />
                            </View>
                            <Text style={styles.actionButtonText}>Log Activity</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actionButton}>
                            <View style={{ width: 18, height: 18, alignItems: 'center', justifyContent: 'center' }}>
                                <View style={{ width: 12, height: 12, borderRadius: 6, borderWidth: 2, borderColor: '#FFF' }} />
                            </View>
                            <Text style={styles.actionButtonText}>View Initiatives</Text>
                        </TouchableOpacity>
                    </View>
                </View> */}

                {/* Activity Graph */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Weekly Activity</Text>
                        <View style={styles.legend}>
                            <View style={[styles.legendDot, { backgroundColor: '#2e7f32' }]} />
                            <Text style={styles.legendText}>Points</Text>
                        </View>
                    </View>
                    <ActivityGraph />
                </View>

                {/* Eco Activity Distribution Graph */}
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Activity Distribution</Text>
                    </View>
                    <EcoActivityDistributionGraph />
                </View>



            </ScrollView>

            {/* Floating Action Button */}
            {/* <TouchableOpacity style={styles.fab}>
                <View style={{ width: 30, height: 30, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: 24, height: 4, backgroundColor: '#FFF', borderRadius: 2 }} />
                    <View style={{ position: 'absolute', width: 4, height: 24, backgroundColor: '#FFF', borderRadius: 2 }} />
                </View>
            </TouchableOpacity> */}
        </SafeAreaView>
    );
};

const ActivityGraph = () => {
    const data = [
        { day: 'Mon', points: 30 },
        { day: 'Tue', points: 45 },
        { day: 'Wed', points: 20 },
        { day: 'Thu', points: 60 },
        { day: 'Fri', points: 35 },
        { day: 'Sat', points: 50 },
        { day: 'Sun', points: 40 },
    ];

    const maxPoints = 80;

    return (
        <View style={styles.graphCard}>
            <View style={styles.yAxis}>
                <Text style={styles.yAxisLabel}>80</Text>
                <Text style={styles.yAxisLabel}>40</Text>
                <Text style={styles.yAxisLabel}>0</Text>
            </View>
            <View style={styles.graphContent}>
                <View style={styles.barsContainer}>
                    {data.map((item, index) => (
                        <View key={index} style={styles.barWrapper}>
                            <View
                                style={[
                                    styles.bar,
                                    { height: `${(item.points / maxPoints) * 100}%` }
                                ]}
                            />
                            <Text style={styles.dayLabel}>{item.day}</Text>
                        </View>
                    ))}
                </View>
                {/* Horizontal grid lines */}
                <View style={[styles.gridLine, { bottom: '0%' }]} />
                <View style={[styles.gridLine, { bottom: '50%' }]} />
                <View style={[styles.gridLine, { bottom: '100%' }]} />
            </View>
        </View>
    );
};

const EcoActivityDistributionGraph = () => {
    const data = [
        { label: 'Waste', value: 35, color: '#1976d2' },
        { label: 'Energy', value: 25, color: '#f57c00' },
        { label: 'Water', value: 20, color: '#0097a7' },
        { label: 'Plants', value: 20, color: '#2e7f32' },
    ];

    return (
        <View style={styles.distributionCard}>
            {data.map((item, index) => (
                <View key={index} style={styles.distributionRow}>
                    <View style={styles.distributionLabelContainer}>
                        <Text style={styles.distributionLabel}>{item.label}</Text>
                        <Text style={styles.distributionValue}>{item.value}%</Text>
                    </View>
                    <View style={styles.distributionTrack}>
                        <View
                            style={[
                                styles.distributionFill,
                                { width: `${item.value}%`, backgroundColor: item.color }
                            ]}
                        />
                    </View>
                </View>
            ))}
        </View>
    );
};



const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f6f8f6',
    },
    container: {
        paddingHorizontal: 20,
        paddingTop: 50,
        paddingBottom: 50,
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
    legend: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    legendDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
    },
    legendText: {
        fontSize: 12,
        color: '#64748b',
        fontWeight: '500',
    },
    graphCard: {
        backgroundColor: '#FFF',
        borderRadius: 24,
        padding: 24,
        flexDirection: 'row',
        height: 220,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.03)',
        shadowColor: '#2e7f32',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.05,
        shadowRadius: 15,
        elevation: 5,
    },
    yAxis: {
        justifyContent: 'space-between',
        paddingBottom: 25,
        marginRight: 10,
    },
    yAxisLabel: {
        fontSize: 10,
        color: '#94a3b8',
        fontWeight: 'bold',
    },
    graphContent: {
        flex: 1,
        position: 'relative',
    },
    barsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        zIndex: 2,
    },
    barWrapper: {
        alignItems: 'center',
        width: 30,
        height: '100%',
        justifyContent: 'flex-end',
    },
    bar: {
        width: 14,
        backgroundColor: '#2e7f32',
        borderRadius: 7,
        marginBottom: 8,
    },
    dayLabel: {
        fontSize: 10,
        color: '#64748b',
        fontWeight: 'bold',
    },
    gridLine: {
        position: 'absolute',
        left: 0,
        right: 0,
        height: 1,
        backgroundColor: '#f1f5f9',
        zIndex: 1,
    },
    distributionCard: {
        backgroundColor: '#FFF',
        borderRadius: 24,
        padding: 24,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.03)',
        shadowColor: '#2e7f32',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.05,
        shadowRadius: 15,
        elevation: 5,
        gap: 20,
    },
    distributionRow: {
        gap: 8,
    },
    distributionLabelContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    distributionLabel: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#1e293b',
    },
    distributionValue: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#64748b',
    },
    distributionTrack: {
        height: 8,
        backgroundColor: '#f1f5f9',
        borderRadius: 4,
        overflow: 'hidden',
    },
    distributionFill: {
        height: '100%',
        borderRadius: 4,
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
