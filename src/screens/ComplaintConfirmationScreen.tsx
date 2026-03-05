import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const IconWrapper = ({ children, size = 24 }: { children: React.ReactNode, size?: number }) => (
    <View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
        {children}
    </View>
);

const BackIcon = ({ color = '#2e7f32' }) => (
    <IconWrapper>
        <View style={{ width: 12, height: 12, borderLeftWidth: 3, borderBottomWidth: 3, borderColor: color, transform: [{ rotate: '45deg' }, { translateX: 2 }] }} />
    </IconWrapper>
);

const EcoIcon = ({ color = '#2e7f32', size = 80 }) => (
    <IconWrapper size={size}>
        <View style={{ width: size * 0.8, height: size * 0.8, borderTopLeftRadius: size * 0.8, borderBottomRightRadius: size * 0.8, borderWidth: 4, borderColor: color, backgroundColor: color + '20' }} />
        <View style={{ position: 'absolute', width: size * 0.4, height: 4, backgroundColor: color, transform: [{ rotate: '-45deg' }] }} />
    </IconWrapper>
);

const CheckIcon = ({ color = '#FFF', size = 14 }) => (
    <IconWrapper size={size}>
        <View style={{ width: size * 0.6, height: size * 0.3, borderLeftWidth: 2, borderBottomWidth: 2, borderColor: color, transform: [{ rotate: '-45deg' }, { translateY: -2 }] }} />
    </IconWrapper>
);

const ComplaintConfirmationScreen = () => {
    const navigation = useNavigation<any>();

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor="#f6f8f6" />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <BackIcon />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Success</Text>
                <View style={{ width: 40 }} />
            </View>

            {/* Main Content */}
            <View style={styles.content}>
                <View style={styles.illustrationContainer}>
                    <View style={styles.glow} />
                    <View style={styles.iconCircle}>
                        <EcoIcon size={70} />
                    </View>
                    <View style={styles.badge}>
                        <CheckIcon />
                        <Text style={styles.badgeText}>SUBMITTED</Text>
                    </View>
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.title}>Complaint Submitted Successfully 🌱</Text>
                    <Text style={styles.subtitle}>
                        Thank you for helping improve campus sustainability. Our team will look into this issue shortly.
                    </Text>
                </View>

                <TouchableOpacity
                    style={styles.homeButton}
                    onPress={() => navigation.navigate('MainApp')}
                >
                    <Text style={styles.homeButtonText}>Back to Home</Text>
                </TouchableOpacity>
            </View>
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
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(46, 127, 50, 0.1)',
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1e293b',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24,
    },
    illustrationContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40,
    },
    glow: {
        position: 'absolute',
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: 'rgba(46, 127, 50, 0.05)',
    },
    iconCircle: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: 'rgba(46, 127, 50, 0.1)',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 24,
    },
    badge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2e7f32',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        gap: 6,
        shadowColor: '#2e7f32',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
    },
    badgeText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    textContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#1e293b',
        textAlign: 'center',
        marginBottom: 16,
        marginHorizontal: 10,
    } as any, // Using any here because of h1 mimic in styles
    subtitle: {
        fontSize: 16,
        color: '#64748b',
        textAlign: 'center',
        lineHeight: 24,
        paddingHorizontal: 20,
    },
    homeButton: {
        width: '100%',
        backgroundColor: '#2e7f32',
        paddingVertical: 18,
        borderRadius: 16,
        alignItems: 'center',
        shadowColor: '#2e7f32',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,
    },
    homeButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ComplaintConfirmationScreen;
