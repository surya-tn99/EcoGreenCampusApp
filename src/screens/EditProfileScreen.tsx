import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    SafeAreaView,
    StatusBar,
    ScrollView,
    TextInput,
    KeyboardAvoidingView,
    Platform,
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

const CameraIcon = ({ color = '#FFF', size = 16 }: { color?: string, size?: number }) => (
    <IconWrapper size={size}>
        <View style={{ width: size * 0.9, height: size * 0.7, borderWidth: 1.5, borderColor: color, borderRadius: 2 }} />
        <View style={{ position: 'absolute', width: size * 0.4, height: size * 0.4, borderRadius: size * 0.2, borderWidth: 1.5, borderColor: color, top: size * 0.15 }} />
        <View style={{ position: 'absolute', width: size * 0.3, height: size * 0.15, backgroundColor: color, top: -size * 0.1, borderRadius: 1 }} />
    </IconWrapper>
);

const PersonIcon = ({ color = 'rgba(46, 127, 50, 0.6)', size = 20 }: { color?: string, size?: number }) => (
    <IconWrapper size={size}>
        <View style={{ width: size * 0.4, height: size * 0.4, borderRadius: size * 0.2, borderWidth: 1.5, borderColor: color, marginBottom: 1 }} />
        <View style={{ width: size * 0.7, height: size * 0.35, borderTopLeftRadius: size * 0.3, borderTopRightRadius: size * 0.3, borderWidth: 1.5, borderColor: color, borderBottomWidth: 0 }} />
    </IconWrapper>
);

const MailIcon = ({ color = 'rgba(46, 127, 50, 0.6)', size = 20 }: { color?: string, size?: number }) => (
    <IconWrapper size={size}>
        <View style={{ width: size * 0.9, height: size * 0.7, borderWidth: 1.5, borderColor: color, borderRadius: 2 }} />
        <View style={{ position: 'absolute', width: size * 0.7, height: size * 0.4, borderBottomWidth: 1.5, borderLeftWidth: 1.5, borderRightWidth: 1.5, borderColor: color, top: 0, transform: [{ rotateX: '45deg' }] }} />
    </IconWrapper>
);

const CallIcon = ({ color = 'rgba(46, 127, 50, 0.6)', size = 20 }: { color?: string, size?: number }) => (
    <IconWrapper size={size}>
        <View style={{ width: size * 0.4, height: size * 0.8, borderWidth: 1.5, borderColor: color, borderRadius: 4 }} />
        <View style={{ width: size * 0.2, height: size * 0.1, backgroundColor: color, marginTop: 2, borderRadius: 1 }} />
    </IconWrapper>
);

const EcoIcon = ({ color = 'rgba(46, 127, 50, 0.6)', size = 20 }: { color?: string, size?: number }) => (
    <IconWrapper size={size}>
        <View style={{ width: size * 0.7, height: size * 0.7, borderTopLeftRadius: size * 0.7, borderBottomRightRadius: size * 0.7, borderWidth: 1.5, borderColor: color, backgroundColor: 'rgba(46, 127, 50, 0.1)' }} />
    </IconWrapper>
);

const SchoolIcon = ({ color = 'rgba(46, 127, 50, 0.6)', size = 20 }: { color?: string, size?: number }) => (
    <IconWrapper size={size}>
        <View style={{ width: 0, height: 0, borderLeftWidth: size * 0.45, borderRightWidth: size * 0.45, borderBottomWidth: size * 0.25, borderLeftColor: 'transparent', borderRightColor: 'transparent', borderBottomColor: color, transform: [{ rotate: '180deg' }] }} />
        <View style={{ width: 0, height: 0, borderLeftWidth: size * 0.45, borderRightWidth: size * 0.45, borderBottomWidth: size * 0.25, borderLeftColor: 'transparent', borderRightColor: 'transparent', borderBottomColor: color, marginTop: -2 }} />
        <View style={{ width: 2, height: size * 0.4, backgroundColor: color, position: 'absolute', right: 2, top: size * 0.4 }} />
    </IconWrapper>
);

const EditProfileScreen = () => {
    const navigation = useNavigation<any>();
    const [name, setName] = useState('Alex Green');
    const [email, setEmail] = useState('alex.green@ecocampus.edu');
    const [phone, setPhone] = useState('+1 (555) 123-4567');
    const [department, setDepartment] = useState('Sustainability');
    const [college, setCollege] = useState('EcoCampus University');

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor="#f6f8f6" />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerButton} onPress={() => navigation.goBack()}>
                    <BackIcon />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Edit Profile</Text>
                <View style={{ width: 40 }} />
            </View>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                    {/* Profile Image Section */}
                    <View style={styles.profileImageSection}>
                        <View style={styles.avatarContainer}>
                            <View style={styles.avatarBorder}>
                                <Image
                                    source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8ccD5Y6Jmf3WfHS8FUYWSrAVdsK2LA_e_K-_OVNL9qI5wxOocKHlUC4E_-z7mLqHk9OY5nuVxnTUf-OKEdyfvHZ6aht52HFm9LcB735UVtqw7qj-W-87aezRZCU_MMMsyuxLqBS4oeEHgIgqRCAZtklF-3JcR6OGZSF9j8Uz7RJ-9pSojWVi6kfvhbkTjxA_Scjs0KC5-XycfWKoR_7ZboDfwiMflxHaEaPORXYBYWA8FKqk6O0_7d7YnEsGBgzKPF4apqf5T5y4' }}
                                    style={styles.avatar}
                                />
                            </View>
                            <TouchableOpacity style={styles.cameraButton}>
                                <CameraIcon />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.userName}>{name}</Text>
                        <Text style={styles.userTitle}>Sustainability Enthusiast</Text>
                    </View>

                    {/* Form Fields */}
                    <View style={styles.form}>
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Full Name</Text>
                            <View style={styles.inputWrapper}>
                                <PersonIcon />
                                <TextInput
                                    style={styles.input}
                                    value={name}
                                    onChangeText={setName}
                                    placeholder="Full Name"
                                />
                            </View>
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Email</Text>
                            <View style={styles.inputWrapper}>
                                <MailIcon />
                                <TextInput
                                    style={styles.input}
                                    value={email}
                                    onChangeText={setEmail}
                                    placeholder="Email"
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                />
                            </View>
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Phone Number</Text>
                            <View style={styles.inputWrapper}>
                                <CallIcon />
                                <TextInput
                                    style={styles.input}
                                    value={phone}
                                    onChangeText={setPhone}
                                    placeholder="Phone Number"
                                    keyboardType="phone-pad"
                                />
                            </View>
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Department</Text>
                            <View style={styles.inputWrapper}>
                                <EcoIcon />
                                <TextInput
                                    style={styles.input}
                                    value={department}
                                    onChangeText={setDepartment}
                                    placeholder="Department"
                                />
                            </View>
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>College</Text>
                            <View style={styles.inputWrapper}>
                                <SchoolIcon />
                                <TextInput
                                    style={styles.input}
                                    value={college}
                                    onChangeText={setCollege}
                                    placeholder="College"
                                />
                            </View>
                        </View>

                        {/* Buttons */}
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.saveButton}
                                onPress={() => navigation.goBack()}
                            >
                                <Text style={styles.saveButtonText}>Save Changes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.cancelButton}
                                onPress={() => navigation.goBack()}
                            >
                                <Text style={styles.cancelButtonText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
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
        backgroundColor: 'rgba(246, 248, 246, 0.8)',
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
        padding: 24,
    },
    profileImageSection: {
        alignItems: 'center',
        marginBottom: 32,
    },
    avatarContainer: {
        position: 'relative',
        marginBottom: 16,
    },
    avatarBorder: {
        width: 128,
        height: 128,
        borderRadius: 64,
        borderWidth: 4,
        borderColor: 'rgba(46, 127, 50, 0.2)',
        padding: 4,
        backgroundColor: '#FFF',
    },
    avatar: {
        width: '100%',
        height: '100%',
        borderRadius: 60,
    },
    cameraButton: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#2e7f32',
        width: 36,
        height: 36,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#f6f8f6',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    userName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1e293b',
        marginBottom: 4,
    },
    userTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#2e7f32',
    },
    form: {
        gap: 20,
    },
    inputGroup: {
        gap: 8,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#334155',
        marginLeft: 4,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: 'rgba(46, 127, 50, 0.2)',
        borderRadius: 16,
        paddingHorizontal: 12,
        height: 52,
    },
    input: {
        flex: 1,
        height: '100%',
        marginLeft: 8,
        fontSize: 14,
        color: '#1e293b',
    },
    buttonContainer: {
        marginTop: 24,
        gap: 12,
    },
    saveButton: {
        backgroundColor: '#2e7f32',
        height: 56,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#2e7f32',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
    },
    saveButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
    },
    cancelButton: {
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cancelButtonText: {
        fontSize: 15,
        fontWeight: '600',
        color: '#64748b',
    },
});

export default EditProfileScreen;
