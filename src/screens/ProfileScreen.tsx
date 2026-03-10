import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    SafeAreaView,
    StatusBar,
    ScrollView,
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

const MoreIcon = ({ color = '#2e7f32' }) => (
    <IconWrapper>
        <View style={{ width: 4, height: 4, borderRadius: 2, backgroundColor: color, marginVertical: 2 }} />
        <View style={{ width: 4, height: 4, borderRadius: 2, backgroundColor: color, marginVertical: 2 }} />
        <View style={{ width: 4, height: 4, borderRadius: 2, backgroundColor: color, marginVertical: 2 }} />
    </IconWrapper>
);

const EditIcon = ({ color = '#FFF', size = 14 }: { color?: string, size?: number }) => (
    <IconWrapper size={size}>
        <View style={{ width: size * 0.8, height: size * 0.8, borderWidth: 1.5, borderColor: color, borderRadius: 2 }} />
        <View style={{ position: 'absolute', width: size * 0.5, height: 1.5, backgroundColor: color, top: size * 0.3 }} />
    </IconWrapper>
);

const MailIcon = ({ color = '#2e7f32', size = 18 }: { color?: string, size?: number }) => (
    <IconWrapper size={size}>
        <View style={{ width: size * 0.9, height: size * 0.7, borderWidth: 1.5, borderColor: color, borderRadius: 2 }} />
        <View style={{ position: 'absolute', width: size * 0.7, height: size * 0.4, borderBottomWidth: 1.5, borderLeftWidth: 1.5, borderRightWidth: 1.5, borderColor: color, top: 0, transform: [{ rotateX: '45deg' }] }} />
    </IconWrapper>
);

const PhoneIcon = ({ color = '#2e7f32', size = 18 }: { color?: string, size?: number }) => (
    <IconWrapper size={size}>
        <View style={{ width: size * 0.6, height: size * 0.9, borderWidth: 1.5, borderColor: color, borderRadius: 4 }} />
        <View style={{ width: size * 0.2, height: size * 0.1, backgroundColor: color, marginTop: 2, borderRadius: 1 }} />
    </IconWrapper>
);

const PersonIcon = ({ color = '#2e7f32' }) => (
    <IconWrapper>
        <View style={{ width: 10, height: 10, borderRadius: 5, borderWidth: 2, borderColor: color, marginBottom: 1 }} />
        <View style={{ width: 16, height: 8, borderTopLeftRadius: 8, borderTopRightRadius: 8, borderWidth: 2, borderColor: color, borderBottomWidth: 0 }} />
    </IconWrapper>
);

const SettingsIcon = ({ color = '#2e7f32' }) => (
    <IconWrapper>
        <View style={{ width: 16, height: 16, borderRadius: 8, borderWidth: 2, borderColor: color, borderStyle: 'dashed' }} />
        <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: color }} />
    </IconWrapper>
);

const ChevronRightIcon = ({ color = '#94a3b8' }) => (
    <IconWrapper>
        <View style={{ width: 10, height: 10, borderRightWidth: 2, borderTopWidth: 2, borderColor: color, transform: [{ rotate: '45deg' }, { translateX: -2 }] }} />
    </IconWrapper>
);

const LogoutIcon = ({ color = '#ef4444' }) => (
    <IconWrapper>
        <View style={{ width: 14, height: 14, borderLeftWidth: 2, borderTopWidth: 2, borderBottomWidth: 2, borderColor: color, borderTopLeftRadius: 2, borderBottomLeftRadius: 2 }} />
        <View style={{ position: 'absolute', width: 10, height: 2, backgroundColor: color, right: 0 }} />
        <View style={{ position: 'absolute', width: 6, height: 6, borderTopWidth: 2, borderRightWidth: 2, borderColor: color, right: 0, transform: [{ rotate: '45deg' }] }} />
    </IconWrapper>
);

const ProfileScreen = () => {
    const navigation = useNavigation<any>();

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor="#f6f8f6" />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerButton} onPress={() => navigation.goBack()}>
                    <BackIcon />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Profile</Text>
                <TouchableOpacity style={styles.headerButton}>
                    <MoreIcon />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                {/* Profile Card */}
                <View style={styles.profileCard}>
                    <View style={styles.avatarContainer}>
                        <View style={styles.avatarBorder}>
                            <Image
                                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2zzZwK69ovmWcP181czvVDgftlegU-yF_8EgBDdLmAfWr1vr1g_G9JQ7FT02Vtt8YGhrh7WLDj5GhokAyGLmlk4HwLLQcujrGULfHZS30RAxmAMJqOoM-O2h1mJXflIBSbitauDM5yrgPHYQs73MJZHIZvu2VQ1DAxiFxnvzeccJNJSv34KI05b5vGYFKlaC1s8Xva9FjUiKutzniV7LMx4jOtIQQCQ_8BKpKMCwQDHyfcHmlmQoGo3Q0I4_8yVJjP_f-QFBlKmc' }}
                                style={styles.avatar}
                            />
                        </View>
                        <TouchableOpacity
                            style={styles.editAvatarButton}
                            onPress={() => navigation.navigate('EditProfile')}
                        >
                            <EditIcon />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.userName}>Alex Green</Text>
                    <Text style={styles.userTitle}>Sustainability Advocate</Text>

                    <View style={styles.contactContainer}>
                        <View style={styles.contactItem}>
                            <MailIcon color="rgba(46, 127, 50, 0.7)" />
                            <Text style={styles.contactText}>alex.green@ecocampus.edu</Text>
                        </View>
                        <View style={styles.contactItem}>
                            <PhoneIcon color="rgba(46, 127, 50, 0.7)" />
                            <Text style={styles.contactText}>+1 (555) 123-4567</Text>
                        </View>
                    </View>
                </View>

                {/* Menu Items */}
                <View style={styles.menuContainer}>
                    <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() => navigation.navigate('EditProfile')}
                    >
                        <View style={styles.menuItemLeft}>
                            <View style={styles.menuIconContainer}>
                                <PersonIcon />
                            </View>
                            <Text style={styles.menuItemText}>Edit Profile</Text>
                        </View>
                        <ChevronRightIcon />
                    </TouchableOpacity>


                    <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() => navigation.navigate('Settings')}
                    >
                        <View style={styles.menuItemLeft}>
                            <View style={styles.menuIconContainer}>
                                <SettingsIcon />
                            </View>
                            <Text style={styles.menuItemText}>Settings</Text>
                        </View>
                        <ChevronRightIcon />
                    </TouchableOpacity>

                </View>

                {/* Sustainability Stats */}
                <View style={styles.statsSection}>
                    <Text style={styles.statsLabel}>SUSTAINABILITY STATS</Text>
                    <View style={styles.statsGrid}>
                        <View style={styles.statCard}>
                            <Text style={styles.statValue}>12.4</Text>
                            <Text style={styles.statUnit}>kg CO2 Saved</Text>
                        </View>
                        <View style={styles.statCard}>
                            <Text style={styles.statValue}>48</Text>
                            <Text style={styles.statUnit}>Eco Points</Text>
                        </View>
                    </View>
                </View>

                {/* Logout Button */}
                <TouchableOpacity
                    style={styles.logoutButton}
                    onPress={() => navigation.navigate('LoginScreen')}
                >
                    <LogoutIcon />
                    <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>
            </ScrollView>
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
        paddingHorizontal: 16,
        paddingTop: 50,
        paddingBottom: 12,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(46, 127, 50, 0.1)',
    },

    headerButton: {
        padding: 8,
        borderRadius: 20,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1e293b',
    },
    scrollContent: {
        padding: 24,
    },
    profileCard: {
        backgroundColor: '#FFF',
        borderRadius: 24,
        padding: 32,
        alignItems: 'center',
        marginBottom: 32,
        borderWidth: 1,
        borderColor: 'rgba(46, 127, 50, 0.1)',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 12,
        elevation: 2,
    },
    avatarContainer: {
        position: 'relative',
        marginBottom: 24,
    },
    avatarBorder: {
        width: 128,
        height: 128,
        borderRadius: 64,
        borderWidth: 4,
        borderColor: 'rgba(46, 127, 50, 0.2)',
        padding: 4,
    },
    avatar: {
        width: '100%',
        height: '100%',
        borderRadius: 60,
    },
    editAvatarButton: {
        position: 'absolute',
        bottom: 4,
        right: 4,
        backgroundColor: '#2e7f32',
        width: 32,
        height: 32,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    userName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1e293b',
        marginBottom: 4,
    },
    userTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#2e7f32',
        marginBottom: 24,
    },
    contactContainer: {
        width: '100%',
        paddingTop: 24,
        borderTopWidth: 1,
        borderTopColor: 'rgba(46, 127, 50, 0.05)',
        gap: 12,
    },
    contactItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    contactText: {
        fontSize: 14,
        color: '#64748b',
    },
    menuContainer: {
        gap: 12,
        marginBottom: 24,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FFF',
        padding: 16,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: 'rgba(46, 127, 50, 0.05)',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 1,
    },
    menuItemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    menuIconContainer: {
        padding: 8,
        backgroundColor: 'rgba(46, 127, 50, 0.1)',
        borderRadius: 8,
    },
    menuItemText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1e293b',
    },
    statsSection: {
        marginBottom: 32,
    },
    statsLabel: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#94a3b8',
        letterSpacing: 1.5,
        marginBottom: 12,
        paddingHorizontal: 4,
    },
    statsGrid: {
        flexDirection: 'row',
        gap: 12,
    },
    statCard: {
        flex: 1,
        backgroundColor: 'rgba(46, 127, 50, 0.05)',
        padding: 16,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: 'rgba(46, 127, 50, 0.1)',
    },
    statValue: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2e7f32',
        marginBottom: 4,
    },
    statUnit: {
        fontSize: 12,
        color: '#64748b',
        fontWeight: '500',
    },
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
        padding: 16,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: 'rgba(239, 68, 68, 0.1)',
        marginBottom: 40,
    },
    logoutText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ef4444',
    },
});

export default ProfileScreen;
