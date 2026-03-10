import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
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

const LocationIcon = ({ color = '#94a3b8' }) => (
    <IconWrapper>
        <View style={{ width: 12, height: 12, borderRadius: 6, borderWidth: 2, borderColor: color }} />
        <View style={{ width: 2, height: 6, backgroundColor: color, position: 'absolute', bottom: 2 }} />
    </IconWrapper>
);

const PhotoIcon = ({ color = '#2e7f32' }) => (
    <IconWrapper size={32}>
        <View style={{ width: 28, height: 20, borderWidth: 2, borderColor: color, borderRadius: 4 }} />
        <View style={{ width: 8, height: 8, borderRadius: 4, borderWidth: 2, borderColor: color, position: 'absolute' }} />
        <View style={{ width: 6, height: 3, backgroundColor: color, position: 'absolute', top: 4, left: 10, borderRadius: 1 }} />
    </IconWrapper>
);

const StarIcon = ({ color = '#FFF' }) => (
    <IconWrapper>
        <View style={{ width: 14, height: 14, backgroundColor: color, transform: [{ rotate: '45deg' }] }} />
        <View style={{ width: 14, height: 14, backgroundColor: color, position: 'absolute' }} />
    </IconWrapper>
);

const AddActivityScreen = () => {
    const navigation = useNavigation<any>();
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('2026-03-05');
    const [time, setTime] = useState('16:05');

    const categories = [
        'Waste Management',
        'Energy Saving',
        'Water Conservation',
        'Plantation',
    ];

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor="#f6f8f6" />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <BackIcon />
                </TouchableOpacity>
                <View>
                    <Text style={styles.headerTitle}>Add Eco Activity 🌱</Text>
                    <Text style={styles.headerSubtitle}>Log your eco-friendly action</Text>
                </View>
            </View>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                    {/* Category Selection */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Activity Category</Text>
                        <Text style={styles.label}>Select Category</Text>
                        <View style={styles.pickerContainer}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryChips}>
                                {categories.map((cat) => (
                                    <TouchableOpacity
                                        key={cat}
                                        onPress={() => setCategory(cat)}
                                        style={[
                                            styles.categoryChip,
                                            category === cat && styles.categoryChipActive
                                        ]}
                                    >
                                        <Text style={[
                                            styles.categoryChipText,
                                            category === cat && styles.categoryChipTextActive
                                        ]}>{cat}</Text>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </View>
                    </View>

                    {/* Form Fields */}
                    <View style={styles.formSection}>
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Activity Description</Text>
                            <TextInput
                                style={[styles.input, styles.textArea]}
                                placeholder="Tell us more about what you did..."
                                multiline
                                numberOfLines={4}
                                value={description}
                                onChangeText={setDescription}
                            />
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Location</Text>
                            <View style={styles.inputWrapper}>
                                <LocationIcon />
                                <TextInput
                                    style={styles.inputField}
                                    placeholder="Main Campus Square"
                                    value={location}
                                    onChangeText={setLocation}
                                />
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={[styles.inputGroup, { flex: 1 }]}>
                                <Text style={styles.label}>Date</Text>
                                <TextInput
                                    style={styles.input}
                                    value={date}
                                    onChangeText={setDate}
                                />
                            </View>
                            <View style={[styles.inputGroup, { flex: 1 }]}>
                                <Text style={styles.label}>Time</Text>
                                <TextInput
                                    style={styles.input}
                                    value={time}
                                    onChangeText={setTime}
                                />
                            </View>
                        </View>

                        <TouchableOpacity style={styles.uploadButton}>
                            <PhotoIcon />
                            <Text style={styles.uploadButtonText}>Upload Proof Photo</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Points Preview */}
                    <View style={styles.pointsSection}>
                        <View style={styles.pointsCard}>
                            <View style={styles.pointsInfo}>
                                <View style={styles.starsIconContainer}>
                                    <StarIcon />
                                </View>
                                <View>
                                    <Text style={styles.pointsLabel}>Estimated reward</Text>
                                    <Text style={styles.pointsTitle}>Points you will earn</Text>
                                </View>
                            </View>
                            <Text style={styles.pointsValue}>+20</Text>
                        </View>
                    </View>

                    {/* Submit Button */}
                    <View style={styles.submitSection}>
                        <TouchableOpacity
                            style={styles.submitButton}
                            onPress={() => navigation.goBack()}
                        >
                            <Text style={styles.submitButtonText}>Add Eco Activity</Text>
                        </TouchableOpacity>
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
        paddingHorizontal: 20,
        paddingTop: 50,
        paddingBottom: 20,
        backgroundColor: 'rgba(246, 248, 246, 0.8)',
        gap: 16,
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(46, 127, 50, 0.1)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1e293b',
        margin: 0,
    },
    headerSubtitle: {
        fontSize: 14,
        color: '#64748b',
        marginTop: 4,
    },
    scrollContent: {
        paddingBottom: 40,
    },
    section: {
        paddingHorizontal: 20,
        paddingVertical: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1e293b',
        marginBottom: 16,
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#334155',
        marginBottom: 8,
        marginLeft: 4,
    },
    pickerContainer: {
        marginTop: 4,
    },
    categoryChips: {
        gap: 8,
        paddingRight: 20,
    },
    categoryChip: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 12,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: 'rgba(46, 127, 50, 0.1)',
    },
    categoryChipActive: {
        backgroundColor: '#2e7f32',
        borderColor: '#2e7f32',
    },
    categoryChipText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#64748b',
    },
    categoryChipTextActive: {
        color: '#FFF',
    },
    formSection: {
        paddingHorizontal: 20,
        paddingVertical: 24,
        gap: 24,
    },
    inputGroup: {
        gap: 8,
    },
    input: {
        width: '100%',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: 'rgba(46, 127, 50, 0.1)',
        borderRadius: 16,
        paddingHorizontal: 16,
        paddingVertical: 12,
        fontSize: 14,
        color: '#1e293b',
    },
    textArea: {
        minHeight: 100,
        textAlignVertical: 'top',
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: 'rgba(46, 127, 50, 0.1)',
        borderRadius: 16,
        paddingHorizontal: 12,
        height: 52,
    },
    inputField: {
        flex: 1,
        height: '100%',
        marginLeft: 8,
        fontSize: 14,
        color: '#1e293b',
    },
    row: {
        flexDirection: 'row',
        gap: 16,
    },
    uploadButton: {
        width: '100%',
        borderWidth: 2,
        borderStyle: 'dashed',
        borderColor: 'rgba(46, 127, 50, 0.4)',
        borderRadius: 16,
        padding: 24,
        backgroundColor: 'rgba(46, 127, 50, 0.05)',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },
    uploadButtonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#2e7f32',
    },
    pointsSection: {
        paddingHorizontal: 20,
        paddingBottom: 24,
    },
    pointsCard: {
        backgroundColor: 'rgba(46, 127, 50, 0.1)',
        borderWidth: 1,
        borderColor: 'rgba(46, 127, 50, 0.2)',
        borderRadius: 16,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    pointsInfo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    starsIconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#2e7f32',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pointsLabel: {
        fontSize: 12,
        fontWeight: '500',
        color: '#64748b',
    },
    pointsTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#1e293b',
    },
    pointsValue: {
        fontSize: 24,
        fontWeight: '900',
        color: '#2e7f32',
    },
    submitSection: {
        paddingHorizontal: 20,
        paddingBottom: 40,
    },
    submitButton: {
        width: '100%',
        backgroundColor: '#2e7f32',
        paddingVertical: 18,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#2e7f32',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
    },
    submitButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
    },
});

export default AddActivityScreen;
