import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    ScrollView,
    Switch,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const IconWrapper = ({ children, size = 24 }: { children: React.ReactNode, size?: number }) => (
    <View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
        {children}
    </View>
);

const BackIcon = ({ color = '#334155' }) => (
    <IconWrapper>
        <View style={{ width: 12, height: 12, borderLeftWidth: 3, borderBottomWidth: 3, borderColor: color, transform: [{ rotate: '45deg' }, { translateX: 2 }] }} />
    </IconWrapper>
);

const PersonIcon = ({ color = '#2e7f32' }) => (
    <IconWrapper>
        <View style={{ width: 10, height: 10, borderRadius: 5, borderWidth: 2, borderColor: color, marginBottom: 1 }} />
        <View style={{ width: 16, height: 8, borderTopLeftRadius: 8, borderTopRightRadius: 8, borderWidth: 2, borderColor: color, borderBottomWidth: 0 }} />
    </IconWrapper>
);

const LockIcon = ({ color = '#2e7f32' }) => (
    <IconWrapper>
        <View style={{ width: 14, height: 10, borderWidth: 2, borderColor: color, borderRadius: 2, marginTop: 4 }} />
        <View style={{ width: 10, height: 8, borderWidth: 2, borderColor: color, borderBottomWidth: 0, borderTopLeftRadius: 5, borderTopRightRadius: 5, position: 'absolute', top: 2 }} />
    </IconWrapper>
);

const ShieldIcon = ({ color = '#2e7f32' }) => (
    <IconWrapper>
        <View style={{ width: 14, height: 16, borderWidth: 2, borderColor: color, borderBottomLeftRadius: 7, borderBottomRightRadius: 7, borderTopLeftRadius: 2, borderTopRightRadius: 2 }} />
        <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: color, marginTop: -2 }} />
    </IconWrapper>
);

const BellIcon = ({ color = '#2e7f32' }) => (
    <IconWrapper>
        <View style={{ width: 14, height: 14, borderTopLeftRadius: 7, borderTopRightRadius: 7, borderWidth: 2, borderColor: color, borderBottomWidth: 0 }} />
        <View style={{ width: 18, height: 2, backgroundColor: color, borderRadius: 1 }} />
        <View style={{ width: 4, height: 4, borderRadius: 2, backgroundColor: color, marginTop: 1 }} />
    </IconWrapper>
);

const MailIcon = ({ color = '#2e7f32' }) => (
    <IconWrapper>
        <View style={{ width: 16, height: 12, borderWidth: 2, borderColor: color, borderRadius: 2 }} />
        <View style={{ position: 'absolute', width: 12, height: 8, borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderColor: color, top: 2, transform: [{ rotateX: '45deg' }] }} />
    </IconWrapper>
);

const DarkModeIcon = ({ color = '#2e7f32' }) => (
    <IconWrapper>
        <View style={{ width: 16, height: 16, borderRadius: 8, borderWidth: 2, borderColor: color, backgroundColor: 'transparent' }} />
        <View style={{ width: 8, height: 16, borderTopLeftRadius: 8, borderBottomLeftRadius: 8, backgroundColor: color, position: 'absolute', left: 4 }} />
    </IconWrapper>
);

const LanguageIcon = ({ color = '#2e7f32' }) => (
    <IconWrapper>
        <View style={{ width: 16, height: 16, borderRadius: 8, borderWidth: 2, borderColor: color }} />
        <View style={{ position: 'absolute', width: 16, height: 2, backgroundColor: color }} />
        <View style={{ position: 'absolute', width: 2, height: 16, backgroundColor: color }} />
    </IconWrapper>
);

const HelpIcon = ({ color = '#2e7f32' }) => (
    <IconWrapper>
        <View style={{ width: 16, height: 16, borderRadius: 8, borderWidth: 2, borderColor: color, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: color, fontSize: 10, fontWeight: 'bold' }}>?</Text>
        </View>
    </IconWrapper>
);

const DescriptionIcon = ({ color = '#2e7f32' }) => (
    <IconWrapper>
        <View style={{ width: 14, height: 18, borderWidth: 2, borderColor: color, borderRadius: 2 }} />
        <View style={{ width: 8, height: 2, backgroundColor: color, marginVertical: 1 }} />
        <View style={{ width: 8, height: 2, backgroundColor: color, marginVertical: 1 }} />
    </IconWrapper>
);

const PolicyIcon = ({ color = '#2e7f32' }) => (
    <IconWrapper>
        <View style={{ width: 14, height: 18, borderWidth: 2, borderColor: color, borderTopRightRadius: 6 }} />
        <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: color, position: 'absolute', top: 4, left: 4 }} />
    </IconWrapper>
);

const EcoIcon = ({ color = '#2e7f32' }) => (
    <IconWrapper>
        <View style={{ width: 14, height: 14, borderTopLeftRadius: 14, borderBottomRightRadius: 14, borderWidth: 2, borderColor: color, backgroundColor: 'rgba(46, 127, 50, 0.1)' }} />
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

const SettingsScreen = () => {
    const navigation = useNavigation<any>();
    const [pushNotifications, setPushNotifications] = useState(true);
    const [emailNotifications, setEmailNotifications] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const SettingItem = ({ icon, label, rightElement, onPress }: any) => (
        <TouchableOpacity
            style={styles.settingItem}
            onPress={onPress}
            disabled={!onPress}
        >
            <View style={styles.settingItemLeft}>
                {icon}
                <Text style={styles.settingItemLabel}>{label}</Text>
            </View>
            {rightElement || <ChevronRightIcon />}
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor="#FFF" />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerButton} onPress={() => navigation.goBack()}>
                    <BackIcon />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Settings</Text>
                <View style={{ width: 40 }} />
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                {/* Account Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>ACCOUNT</Text>
                    <View style={styles.sectionCard}>
                        <SettingItem
                            icon={<PersonIcon />}
                            label="Edit Profile"
                            onPress={() => navigation.navigate('EditProfile')}
                        />
                        <View style={styles.separator} />
                        <SettingItem icon={<LockIcon />} label="Change Password" />
                        <View style={styles.separator} />
                        <SettingItem icon={<ShieldIcon />} label="Privacy Settings" />
                    </View>
                </View>

                {/* Preferences Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>PREFERENCES</Text>
                    <View style={styles.sectionCard}>
                        <View style={styles.settingItem}>
                            <View style={styles.settingItemLeft}>
                                <BellIcon />
                                <Text style={styles.settingItemLabel}>Push Notifications</Text>
                            </View>
                            <Switch
                                value={pushNotifications}
                                onValueChange={setPushNotifications}
                                trackColor={{ false: '#cbd5e1', true: '#2e7f32' }}
                                thumbColor="#FFF"
                            />
                        </View>
                        <View style={styles.separator} />
                        <View style={styles.settingItem}>
                            <View style={styles.settingItemLeft}>
                                <MailIcon />
                                <Text style={styles.settingItemLabel}>Email Notifications</Text>
                            </View>
                            <Switch
                                value={emailNotifications}
                                onValueChange={setEmailNotifications}
                                trackColor={{ false: '#cbd5e1', true: '#2e7f32' }}
                                thumbColor="#FFF"
                            />
                        </View>
                        <View style={styles.separator} />
                        <View style={styles.settingItem}>
                            <View style={styles.settingItemLeft}>
                                <DarkModeIcon />
                                <Text style={styles.settingItemLabel}>Dark Mode</Text>
                            </View>
                            <Switch
                                value={darkMode}
                                onValueChange={setDarkMode}
                                trackColor={{ false: '#cbd5e1', true: '#2e7f32' }}
                                thumbColor="#FFF"
                            />
                        </View>
                        <View style={styles.separator} />
                        <SettingItem
                            icon={<LanguageIcon />}
                            label="Language"
                            rightElement={
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                                    <Text style={styles.languageText}>English</Text>
                                    <ChevronRightIcon />
                                </View>
                            }
                        />
                    </View>
                </View>

                {/* Support Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>SUPPORT</Text>
                    <View style={styles.sectionCard}>
                        <SettingItem icon={<HelpIcon />} label="Help Center" />
                        <View style={styles.separator} />
                        <SettingItem icon={<DescriptionIcon />} label="Terms of Service" />
                        <View style={styles.separator} />
                        <SettingItem icon={<PolicyIcon />} label="Privacy Policy" />
                        <View style={styles.separator} />
                        <SettingItem icon={<EcoIcon />} label="About EcoCampus" />
                    </View>
                </View>

                {/* Footer */}
                <View style={styles.footer}>
                    <TouchableOpacity
                        style={styles.logoutButton}
                        onPress={() => navigation.navigate('LoginScreen')}
                    >
                        <LogoutIcon />
                        <Text style={styles.logoutText}>Log Out</Text>
                    </TouchableOpacity>
                    <Text style={styles.versionText}>EcoCampus v1.0.2</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingTop: 50,
        paddingBottom: 12,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(46, 127, 50, 0.1)',
    },

    headerButton: {
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
        flex: 1,
        textAlign: 'center',
    },
    scrollContent: {
        paddingBottom: 40,
    },
    section: {
        marginTop: 24,
        paddingHorizontal: 16,
    },
    sectionTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#2e7f32',
        letterSpacing: 1,
        marginBottom: 8,
        marginLeft: 8,
    },
    sectionCard: {
        backgroundColor: 'rgba(46, 127, 50, 0.05)',
        borderRadius: 16,
        overflow: 'hidden',
    },
    settingItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
    settingItemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    settingItemLabel: {
        fontSize: 16,
        fontWeight: '500',
        color: '#1e293b',
    },
    separator: {
        height: 1,
        backgroundColor: 'rgba(46, 127, 50, 0.1)',
        marginHorizontal: 16,
    },
    languageText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#2e7f32',
    },
    footer: {
        marginTop: 48,
        paddingHorizontal: 16,
        alignItems: 'center',
        gap: 16,
    },
    logoutButton: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        paddingVertical: 16,
        backgroundColor: '#fef2f2',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#fee2e2',
    },
    logoutText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ef4444',
    },
    versionText: {
        fontSize: 14,
        color: '#94a3b8',
    },
});

export default SettingsScreen;
