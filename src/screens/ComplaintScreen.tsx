import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    TextInput,
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
        <View style={{ width: 15, height: 15, borderLeftWidth: 3, borderBottomWidth: 3, borderColor: color, transform: [{ rotate: '45deg' }, { translateX: 2 }] }} />
    </IconWrapper>
);

const NotificationIcon = ({ color = '#2e7f32' }) => (
    <IconWrapper>
        <View style={{ width: 16, height: 16, borderRadius: 8, borderWidth: 2, borderColor: color }} />
        <View style={{ width: 4, height: 2, backgroundColor: color, marginTop: 1 }} />
    </IconWrapper>
);

const WasteIcon = ({ color = '#FFF' }) => (
    <IconWrapper size={20}>
        <View style={{ width: 14, height: 2, backgroundColor: color, marginBottom: 2 }} />
        <View style={{ width: 12, height: 12, borderWidth: 2, borderColor: color, borderTopWidth: 0 }} />
    </IconWrapper>
);

const WaterIcon = ({ color = '#2e7f32' }) => (
    <IconWrapper size={20}>
        <View style={{ width: 8, height: 12, borderRadius: 4, backgroundColor: color, transform: [{ scaleY: 1.5 }] }} />
    </IconWrapper>
);

const BoltIcon = ({ color = '#2e7f32' }) => (
    <IconWrapper size={20}>
        <View style={{ width: 0, height: 0, borderLeftWidth: 4, borderRightWidth: 0, borderBottomWidth: 8, borderLeftColor: 'transparent', borderBottomColor: color, transform: [{ skewX: '-20deg' }] }} />
        <View style={{ width: 0, height: 0, borderLeftWidth: 0, borderRightWidth: 4, borderTopWidth: 8, borderRightColor: 'transparent', borderTopColor: color, transform: [{ skewX: '-20deg' }, { translateY: -2 }] }} />
    </IconWrapper>
);

const BlockIcon = ({ color = '#2e7f32' }) => (
    <IconWrapper size={20}>
        <View style={{ width: 14, height: 14, borderRadius: 7, borderWidth: 2, borderColor: color }} />
        <View style={{ position: 'absolute', width: 10, height: 2, backgroundColor: color, transform: [{ rotate: '45deg' }] }} />
    </IconWrapper>
);

const BuildIcon = ({ color = '#2e7f32' }) => (
    <IconWrapper size={20}>
        <View style={{ width: 12, height: 4, backgroundColor: color, borderRadius: 2 }} />
        <View style={{ width: 4, height: 10, backgroundColor: color, marginTop: 1 }} />
    </IconWrapper>
);

const EditIcon = ({ color = '#2e7f32' }) => (
    <IconWrapper>
        <View style={{ width: 12, height: 16, borderWidth: 2, borderColor: color, borderRadius: 2 }} />
        <View style={{ position: 'absolute', width: 8, height: 2, backgroundColor: color, top: 6 }} />
        <View style={{ position: 'absolute', width: 8, height: 2, backgroundColor: color, top: 10 }} />
    </IconWrapper>
);

const LocationIcon = ({ color = '#2e7f32' }) => (
    <IconWrapper size={20}>
        <View style={{ width: 10, height: 14, borderRadius: 5, borderWidth: 2, borderColor: color }} />
        <View style={{ position: 'absolute', width: 4, height: 4, borderRadius: 2, backgroundColor: color, top: 3 }} />
    </IconWrapper>
);

const CameraIcon = ({ color = '#2e7f32' }) => (
    <IconWrapper size={30}>
        <View style={{ width: 24, height: 18, borderRadius: 4, borderWidth: 2, borderColor: color }} />
        <View style={{ width: 8, height: 8, borderRadius: 4, borderWidth: 2, borderColor: color, position: 'absolute' }} />
    </IconWrapper>
);

const SendIcon = ({ color = '#FFF' }) => (
    <IconWrapper>
        <View style={{ width: 0, height: 0, borderLeftWidth: 10, borderBottomWidth: 6, borderTopWidth: 6, borderLeftColor: color, borderBottomColor: 'transparent', borderTopColor: 'transparent', transform: [{ rotate: '-45deg' }] }} />
    </IconWrapper>
);

const ComplaintScreen = () => {
    const navigation = useNavigation<any>();
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('Waste Management');

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor="#f6f8f6" />

            {/* Header */}
            <View style={styles.header}>
                <View style={styles.headerTop}>
                    <View style={styles.headerLeft}>
                        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                            <BackIcon />
                        </TouchableOpacity>
                        <Text style={styles.headerTitle}>Campus Complaint Center</Text>
                    </View>
                    <TouchableOpacity style={styles.notifButton}>
                        <NotificationIcon />
                    </TouchableOpacity>
                </View>
                <Text style={styles.headerSubtitle}>
                    Report issues and help maintain a clean and sustainable campus for everyone.
                </Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                {/* Category Selection */}
                <View style={styles.section}>
                    <Text style={styles.sectionLabel}>SELECT CATEGORY</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryScroll}>
                        <CategoryTab
                            icon={<WasteIcon color={category === 'Waste Management' ? "#FFF" : "#2e7f32"} />}
                            label="Waste"
                            active={category === 'Waste Management'}
                            onPress={() => setCategory('Waste Management')}
                        />
                        <CategoryTab
                            icon={<WaterIcon color={category === 'Water Leakage' ? "#FFF" : "#2e7f32"} />}
                            label="Water"
                            active={category === 'Water Leakage'}
                            onPress={() => setCategory('Water Leakage')}
                        />
                        <CategoryTab
                            icon={<BoltIcon color={category === 'Electricity Misuse' ? "#FFF" : "#2e7f32"} />}
                            label="Electricity"
                            active={category === 'Electricity Misuse'}
                            onPress={() => setCategory('Electricity Misuse')}
                        />
                        <CategoryTab
                            icon={<BlockIcon color={category === 'Plastic Usage' ? "#FFF" : "#2e7f32"} />}
                            label="Plastic"
                            active={category === 'Plastic Usage'}
                            onPress={() => setCategory('Plastic Usage')}
                        />
                        <CategoryTab
                            icon={<BuildIcon color={category === 'Damaged Infrastructure' ? "#FFF" : "#2e7f32"} />}
                            label="Infra"
                            active={category === 'Damaged Infrastructure'}
                            onPress={() => setCategory('Damaged Infrastructure')}
                        />
                    </ScrollView>
                </View>


                {/* Complaint Form */}
                <View style={styles.formCard}>
                    <View style={styles.formHeader}>
                        <EditIcon />
                        <Text style={styles.formTitle}>Complaint Details</Text>
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>COMPLAINT TITLE</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Short summary of the issue"
                            value={title}
                            onChangeText={setTitle}
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>COMPLAINT CATEGORY</Text>
                        <View style={styles.pickerWrapper}>
                            <Text style={styles.pickerText}>{category}</Text>
                            <View style={{ width: 0, height: 0, borderLeftWidth: 6, borderRightWidth: 6, borderTopWidth: 8, borderLeftColor: 'transparent', borderRightColor: 'transparent', borderTopColor: '#94a3b8' }} />
                        </View>
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>LOCATION</Text>
                        <View style={styles.inputWithIcon}>
                            <LocationIcon />
                            <TextInput
                                style={styles.inputInner}
                                placeholder="e.g. Block A, Library"
                                value={location}
                                onChangeText={setLocation}
                            />
                        </View>
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>DESCRIPTION</Text>
                        <TextInput
                            style={[styles.input, styles.textArea]}
                            placeholder="Provide more details about the issue..."
                            multiline
                            numberOfLines={4}
                            value={description}
                            onChangeText={setDescription}
                        />
                    </View>

                    <View style={styles.uploadSection}>
                        <TouchableOpacity style={styles.uploadButton}>
                            <View style={styles.cameraIconContainer}>
                                <CameraIcon />
                            </View>
                            <Text style={styles.uploadLabel}>Upload Image</Text>
                            <Text style={styles.uploadSublabel}>Max file size 5MB</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

            {/* Bottom Submit */}
            <View style={styles.bottomBanner}>
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() => navigation.navigate('ComplaintConfirmationScreen')}
                >
                    <SendIcon />
                    <Text style={styles.submitText}>Submit Complaint</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
};

const CategoryTab = ({ icon, label, active = false, onPress }: any) => (
    <TouchableOpacity style={[styles.categoryTab, active && styles.categoryTabActive]} onPress={onPress}>
        {icon}
        <Text style={[styles.categoryTabText, active && styles.categoryTabTextActive]}>{label}</Text>
    </TouchableOpacity>
);


const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        padding: 20,
        paddingTop: 50,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(46, 127, 50, 0.1)',
    },
    headerTop: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    backButton: {
        padding: 10,
        backgroundColor: 'rgba(46, 127, 50, 0.1)',
        borderRadius: 12,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1e293b',
    },
    notifButton: {
        padding: 8,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'rgba(46, 127, 50, 0.1)',
    },
    headerSubtitle: {
        fontSize: 14,
        color: '#64748b',
        lineHeight: 20,
    },
    scrollContent: {
        paddingBottom: 150,
        paddingTop: 20,
    },
    section: {
        paddingVertical: 10,
    },
    sectionLabel: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#94a3b8',
        paddingHorizontal: 20,
        marginBottom: 12,
    },
    categoryScroll: {
        paddingHorizontal: 20,
        gap: 10,
    },
    categoryTab: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        height: 44,
        borderRadius: 22,
        backgroundColor: 'rgba(46, 127, 50, 0.05)',
        borderWidth: 1,
        borderColor: 'rgba(46, 127, 50, 0.1)',
        gap: 8,
    },
    categoryTabActive: {
        backgroundColor: '#2e7f32',
        borderColor: '#2e7f32',
    },
    categoryTabText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#475569',
    },
    categoryTabTextActive: {
        color: '#FFFFFF',
    },
    formCard: {
        marginHorizontal: 20,
        marginTop: 20,
        backgroundColor: '#f8fafc',
        borderRadius: 24,
        padding: 20,
        borderWidth: 1,
        borderColor: 'rgba(46, 127, 50, 0.05)',
    },
    formHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginBottom: 20,
    },
    formTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1e293b',
    },
    inputGroup: {
        marginBottom: 16,
    },
    label: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#94a3b8',
        marginBottom: 6,
        marginLeft: 4,
    },
    input: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'rgba(46, 127, 50, 0.2)',
        paddingHorizontal: 16,
        paddingVertical: 12,
        fontSize: 14,
        color: '#1e293b',
    },
    pickerWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'rgba(46, 127, 50, 0.2)',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    pickerText: {
        fontSize: 14,
        color: '#1e293b',
    },
    inputWithIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'rgba(46, 127, 50, 0.2)',
        paddingLeft: 12,
    },
    inputInner: {
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 12,
        fontSize: 14,
        color: '#1e293b',
    },
    textArea: {
        height: 100,
        textAlignVertical: 'top',
    },
    uploadSection: {
        paddingTop: 10,
    },
    uploadButton: {
        width: '100%',
        height: 140,
        borderRadius: 20,
        borderWidth: 2,
        borderStyle: 'dashed',
        borderColor: 'rgba(46, 127, 50, 0.3)',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },
    cameraIconContainer: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: 'rgba(46, 127, 50, 0.1)',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
    },
    uploadLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#475569',
    },
    uploadSublabel: {
        fontSize: 11,
        color: '#94a3b8',
        marginTop: 4,
    },
    bottomBanner: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 20,
        paddingBottom: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
    submitButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2e7f32',
        borderRadius: 16,
        paddingVertical: 16,
        gap: 10,
        shadowColor: '#2e7f32',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,
    },
    submitText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
});

export default ComplaintScreen;
