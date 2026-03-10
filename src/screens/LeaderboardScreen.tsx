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
import { useNavigation } from '@react-navigation/native';


const EcoIcon = ({ color = '#2e7f32', size = 14 }: { color?: string, size?: number }) => (

    <View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ width: size * 0.8, height: size * 0.8, borderTopLeftRadius: size * 0.8, borderBottomRightRadius: size * 0.8, borderWidth: size * 0.1, borderColor: color, backgroundColor: 'rgba(46, 127, 50, 0.2)' }} />
    </View>
);

const TrendingUpIcon = ({ color = '#FFF', size = 20 }: { color?: string, size?: number }) => (

    <View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ width: size * 0.7, height: size * 0.7, borderTopWidth: 2, borderRightWidth: 2, borderColor: color, transform: [{ rotate: '-45deg' }, { translateY: 2 }] }} />
        <View style={{ position: 'absolute', bottom: 2, left: 2, width: size * 0.8, height: 2, backgroundColor: color, transform: [{ rotate: '-45deg' }] }} />
    </View>
);

const LeaderboardScreen = () => {
    const navigation = useNavigation<any>();
    const [activePeriod, setActivePeriod] = React.useState('Today');


    const leaderboardData: any = {
        'Today': {
            top3: [
                { name: 'Jeeva', points: 45, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA00UzW42hKojJhb4wL45uUYFfwC6-IO7ADwUoNPvKGpDpH-ESNhDG2G0XqWW22hJVmNU379Tz9Cbk7uz3FxbOwsjHb3xEHjg7bETI9nYefpIyOgZmDLsQmqslD8aSBwnjCrNwnMGsHOZ_ZtWirVCfgXeLthQXMkTp9LcQH1MTIuBlIt4jnit92zgPkeVXftn_YdSVj1g7JymT-AYpSGHHD38UQHo2D8DZvDe83gn28_kR76egMOB4JRjSm9eykOPoDtuTV4xwkVN4', rank: 2 },
                { name: 'Rahul', points: 60, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEo-J2RshjH1_7IGBBpPLJtqqQ7k-Oaj5tlAI0L-JaQOOuXh4AGxJroisimlQMd9hasCpGjXCduQ8hPCAR8zSs4k0w5oMk3y1jkhHCvQkHq0_VRFF-VEwJ7Bno30NSNMKP2bdy7nm47KINCUlIbjDnN5quvxWYCsYLUj0-pUDNaRRuQgH6VKEHNrUoI8Zmicb9IybBJs2hlRYeelOfZIz1Dn2JxPc3RQg3BIq1uViyWPhNFOarVulHgxe7wvp20AzSVJ15_MBVe2Q', rank: 1 },
                { name: 'Ananya', points: 30, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsIYJQAuwFPocA2eYG3m1MCBL_0a0RypgRVFWnk802RuB9PHzeaSCJThdFawDFn1pOpWHjcX52M1rtFGp6bOnMKyrr27fk5JRURrYs5B5lmAR1RWDLyCuCI81rJXzMr3uAWV4dh2T6axVVXbMWz9KLTLmq-Y-0_bJsZzIHkcGx6LsEQhbxfJn5QHDLQEMa5zf6cNS2Nkn3jvry_p7Zrjvh_aCdS_ZuNP2jcqc92Afs0cuJb1n_xJI6wTq5hB0ePG01w9acg0iFGcg', rank: 3 },
            ],
            others: [
                { rank: 4, name: 'Arjun', points: 25, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwfLp2zPxSj0w_lBmleW_drt7SZI2hwuDcHHM5EvWdjHlMjKrXB07y-K_lWd3VJfnIJ14tJqfBFTfrYRIO-xN_7h3t2qzIkFswrMmE7RAcCCEDKQrHDQ_l1KXSHwcSBXPLIQwnBr2YCF7F72Ec8P_jLpX9b0L1EFWGwreZCkNJiTlmfhb5TjmMLbIqGZetvKn_iMhxkzewj6V9rzcIPLkMsT3XvEl6XRLBN5YJPOYij_TKw-3kn8bw8ayDVJ8q9OI_D6UWwIf2sSU' },
                { rank: 5, name: 'Meera', points: 15, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-YOwRHiw9MZ6rMSAhE0qe9jAEvYIqVRmNfmMhjJFQfMrWj-F1eY1EhobrhqsorjmRqzU2a11Th5FAF-MtGLf7Uy8ErR0E_XeB_QYVrZ05f_o8f21HK1P8badoALavAApqe5quoihc-QIx0ZvyfxrXT5-sbPC74305LqiRVEKaWCSTsqic_jrHvkF3MzudQaaAvGIuZlReFM0GBIj5-3h_7j69iGaNVSZOkGtfZ303oH62GIGWU0AF8Q25M4JOCsyS8Gkaf9ad9vk' },
            ],
            userRank: 2,
            userPoints: 45
        },
        'This Week': {
            top3: [
                { name: 'Jeeva', points: 180, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA00UzW42hKojJhb4wL45uUYFfwC6-IO7ADwUoNPvKGpDpH-ESNhDG2G0XqWW22hJVmNU379Tz9Cbk7uz3FxbOwsjHb3xEHjg7bETI9nYefpIyOgZmDLsQmqslD8aSBwnjCrNwnMGsHOZ_ZtWirVCfgXeLthQXMkTp9LcQH1MTIuBlIt4jnit92zgPkeVXftn_YdSVj1g7JymT-AYpSGHHD38UQHo2D8DZvDe83gn28_kR76egMOB4JRjSm9eykOPoDtuTV4xwkVN4', rank: 2 },
                { name: 'Rahul', points: 240, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEo-J2RshjH1_7IGBBpPLJtqqQ7k-Oaj5tlAI0L-JaQOOuXh4AGxJroisimlQMd9hasCpGjXCduQ8hPCAR8zSs4k0w5oMk3y1jkhHCvQkHq0_VRFF-VEwJ7Bno30NSNMKP2bdy7nm47KINCUlIbjDnN5quvxWYCsYLUj0-pUDNaRRuQgH6VKEHNrUoI8Zmicb9IybBJs2hlRYeelOfZIz1Dn2JxPc3RQg3BIq1uViyWPhNFOarVulHgxe7wvp20AzSVJ15_MBVe2Q', rank: 1 },
                { name: 'Ananya', points: 150, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsIYJQAuwFPocA2eYG3m1MCBL_0a0RypgRVFWnk802RuB9PHzeaSCJThdFawDFn1pOpWHjcX52M1rtFGp6bOnMKyrr27fk5JRURrYs5B5lmAR1RWDLyCuCI81rJXzMr3uAWV4dh2T6axVVXbMWz9KLTLmq-Y-0_bJsZzIHkcGx6LsEQhbxfJn5QHDLQEMa5zf6cNS2Nkn3jvry_p7Zrjvh_aCdS_ZuNP2jcqc92Afs0cuJb1n_xJI6wTq5hB0ePG01w9acg0iFGcg', rank: 3 },
            ],
            others: [
                { rank: 4, name: 'Arjun', points: 130, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwfLp2zPxSj0w_lBmleW_drt7SZI2hwuDcHHM5EvWdjHlMjKrXB07y-K_lWd3VJfnIJ14tJqfBFTfrYRIO-xN_7h3t2qzIkFswrMmE7RAcCCEDKQrHDQ_l1KXSHwcSBXPLIQwnBr2YCF7F72Ec8P_jLpX9b0L1EFWGwreZCkNJiTlmfhb5TjmMLbIqGZetvKn_iMhxkzewj6V9rzcIPLkMsT3XvEl6XRLBN5YJPOYij_TKw-3kn8bw8ayDVJ8q9OI_D6UWwIf2sSU' },
                { rank: 5, name: 'Meera', points: 120, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-YOwRHiw9MZ6rMSAhE0qe9jAEvYIqVRmNfmMhjJFQfMrWj-F1eY1EhobrhqsorjmRqzU2a11Th5FAF-MtGLf7Uy8ErR0E_XeB_QYVrZ05f_o8f21HK1P8badoALavAApqe5quoihc-QIx0ZvyfxrXT5-sbPC74305LqiRVEKaWCSTsqic_jrHvkF3MzudQaaAvGIuZlReFM0GBIj5-3h_7j69iGaNVSZOkGtfZ303oH62GIGWU0AF8Q25M4JOCsyS8Gkaf9ad9vk' },
                { rank: 6, name: 'Karthik', points: 110, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWOoJ_yvaaia0L91OrvFGn5K8Mp1K47SB1ZB7dQwwRo55Ti444n-mnDN-MWhoD5rOzQnNF3ncz-22vqadjUaXqkIxI801CCsSzdT1oY6NbRN3OKTBwprZ_4SmVNi_6JAH2IO5pdDe1YbFUhqgqOKBzbMsesYsdRTuDvPPdADqJwIrQef-Rgxta6Z6c1gY25bh-XIPjkGpKPXjdiG_r-sobkKziuyvgCIPWFvEtNWdZEjgXx5koIdS_ZEZSza1FY8QfSas3V4e21xY' },
            ],
            userRank: 2,
            userPoints: 180
        },
        'This Month': {
            top3: [
                { name: 'Rahul', points: 950, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEo-J2RshjH1_7IGBBpPLJtqqQ7k-Oaj5tlAI0L-JaQOOuXh4AGxJroisimlQMd9hasCpGjXCduQ8hPCAR8zSs4k0w5oMk3y1jkhHCvQkHq0_VRFF-VEwJ7Bno30NSNMKP2bdy7nm47KINCUlIbjDnN5quvxWYCsYLUj0-pUDNaRRuQgH6VKEHNrUoI8Zmicb9IybBJs2hlRYeelOfZIz1Dn2JxPc3RQg3BIq1uViyWPhNFOarVulHgxe7wvp20AzSVJ15_MBVe2Q', rank: 1 },
                { name: 'Jeeva', points: 820, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA00UzW42hKojJhb4wL45uUYFfwC6-IO7ADwUoNPvKGpDpH-ESNhDG2G0XqWW22hJVmNU379Tz9Cbk7uz3FxbOwsjHb3xEHjg7bETI9nYefpIyOgZmDLsQmqslD8aSBwnjCrNwnMGsHOZ_ZtWirVCfgXeLthQXMkTp9LcQH1MTIuBlIt4jnit92zgPkeVXftn_YdSVj1g7JymT-AYpSGHHD38UQHo2D8DZvDe83gn28_kR76egMOB4JRjSm9eykOPoDtuTV4xwkVN4', rank: 2 },
                { name: 'Ananya', points: 740, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsIYJQAuwFPocA2eYG3m1MCBL_0a0RypgRVFWnk802RuB9PHzeaSCJThdFawDFn1pOpWHjcX52M1rtFGp6bOnMKyrr27fk5JRURrYs5B5lmAR1RWDLyCuCI81rJXzMr3uAWV4dh2T6axVVXbMWz9KLTLmq-Y-0_bJsZzIHkcGx6LsEQhbxfJn5QHDLQEMa5zf6cNS2Nkn3jvry_p7Zrjvh_aCdS_ZuNP2jcqc92Afs0cuJb1n_xJI6wTq5hB0ePG01w9acg0iFGcg', rank: 3 },
            ],
            others: [
                { rank: 4, name: 'Sanjay', points: 680, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4kygHBVhCexSvRiCT6A-aG6hkCfdZ6KJ4G554fhpF4jzi1RKaX0a5IptvdFem2WSiYEhGuJ2zgTMQw05PKMKZ0iR9s8snGg7TMPxPVaDsq16AIxtPvaQDdypf7W3mCPH52bHQjMBdAnyn8wkjrVV9Gl4jE5iSWtT0g2-EDTsxdxz4yoSWNv3RudpGcxieyrgRRWlJKZs6A2LduAW7sikExBbMbcF8Yn22oZp8EhdY1O9p1vrFoyXXKkUmPQq0kt1jJaVFQbJ51gs' },
                { rank: 5, name: 'Arjun', points: 650, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwfLp2zPxSj0w_lBmleW_drt7SZI2hwuDcHHM5EvWdjHlMjKrXB07y-K_lWd3VJfnIJ14tJqfBFTfrYRIO-xN_7h3t2qzIkFswrMmE7RAcCCEDKQrHDQ_l1KXSHwcSBXPLIQwnBr2YCF7F72Ec8P_jLpX9b0L1EFWGwreZCkNJiTlmfhb5TjmMLbIqGZetvKn_iMhxkzewj6V9rzcIPLkMsT3XvEl6XRLBN5YJPOYij_TKw-3kn8bw8ayDVJ8q9OI_D6UWwIf2sSU' },
            ],
            userRank: 2,
            userPoints: 820
        },
        'All Time': {
            top3: [
                { name: 'Rahul', points: 4200, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEo-J2RshjH1_7IGBBpPLJtqqQ7k-Oaj5tlAI0L-JaQOOuXh4AGxJroisimlQMd9hasCpGjXCduQ8hPCAR8zSs4k0w5oMk3y1jkhHCvQkHq0_VRFF-VEwJ7Bno30NSNMKP2bdy7nm47KINCUlIbjDnN5quvxWYCsYLUj0-pUDNaRRuQgH6VKEHNrUoI8Zmicb9IybBJs2hlRYeelOfZIz1Dn2JxPc3RQg3BIq1uViyWPhNFOarVulHgxe7wvp20AzSVJ15_MBVe2Q', rank: 1 },
                { name: 'Meera', points: 3950, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-YOwRHiw9MZ6rMSAhE0qe9jAEvYIqVRmNfmMhjJFQfMrWj-F1eY1EhobrhqsorjmRqzU2a11Th5FAF-MtGLf7Uy8ErR0E_XeB_QYVrZ05f_o8f21HK1P8badoALavAApqe5quoihc-QIx0ZvyfxrXT5-sbPC74305LqiRVEKaWCSTsqic_jrHvkF3MzudQaaAvGIuZlReFM0GBIj5-3h_7j69iGaNVSZOkGtfZ303oH62GIGWU0AF8Q25M4JOCsyS8Gkaf9ad9vk', rank: 2 },
                { name: 'Jeeva', points: 3700, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA00UzW42hKojJhb4wL45uUYFfwC6-IO7ADwUoNPvKGpDpH-ESNhDG2G0XqWW22hJVmNU379Tz9Cbk7uz3FxbOwsjHb3xEHjg7bETI9nYefpIyOgZmDLsQmqslD8aSBwnjCrNwnMGsHOZ_ZtWirVCfgXeLthQXMkTp9LcQH1MTIuBlIt4jnit92zgPkeVXftn_YdSVj1g7JymT-AYpSGHHD38UQHo2D8DZvDe83gn28_kR76egMOB4JRjSm9eykOPoDtuTV4xwkVN4', rank: 3 },
            ],
            others: [
                { rank: 4, name: 'Ananya', points: 3500, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsIYJQAuwFPocA2eYG3m1MCBL_0a0RypgRVFWnk802RuB9PHzeaSCJThdFawDFn1pOpWHjcX52M1rtFGp6bOnMKyrr27fk5JRURrYs5B5lmAR1RWDLyCuCI81rJXzMr3uAWV4dh2T6axVVXbMWz9KLTLmq-Y-0_bJsZzIHkcGx6LsEQhbxfJn5QHDLQEMa5zf6cNS2Nkn3jvry_p7Zrjvh_aCdS_ZuNP2jcqc92Afs0cuJb1n_xJI6wTq5hB0ePG01w9acg0iFGcg' },
                { rank: 5, name: 'Karthik', points: 3400, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWOoJ_yvaaia0L91OrvFGn5K8Mp1K47SB1ZB7dQwwRo55Ti444n-mnDN-MWhoD5rOzQnNF3ncz-22vqadjUaXqkIxI801CCsSzdT1oY6NbRN3OKTBwprZ_4SmVNi_6JAH2IO5pdDe1YbFUhqgqOKBzbMsesYsdRTuDvPPdADqJwIrQef-Rgxta6Z6c1gY25bh-XIPjkGpKPXjdiG_r-sobkKziuyvgCIPWFvEtNWdZEjgXx5koIdS_ZEZSza1FY8QfSas3V4e21xY' },
            ],
            userRank: 3,
            userPoints: 3700
        }
    };

    const currentData = leaderboardData[activePeriod];
    const top1 = currentData.top3.find((l: any) => l.rank === 1);
    const top2 = currentData.top3.find((l: any) => l.rank === 2);
    const top3 = currentData.top3.find((l: any) => l.rank === 3);

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor="#f6f8f6" />

            <View style={styles.fixedHeader}>
                <View style={styles.headerTop}>
                    {/* <TouchableOpacity style={styles.backButton}>
                        <Text style={styles.backText}>←</Text>
                    </TouchableOpacity> */}
                    <Text style={styles.headerTitle}>Eco Leaderboard 🏆</Text>
                    <TouchableOpacity
                        style={styles.miniProfile}
                        onPress={() => navigation.navigate('Profile')}
                    >
                        <Image
                            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcinqTIFvJN-EabUIxfvNnfOW-ADlQh_V2X5KJi94lGu1INCABMyPNO3YUVbTnc5SZgmDuLjSZ01OpLhRjyCNn5rNkm8DP30_wvxLn6YXc5mXB-RmwhVdAOzzWPh14prh8XmvscFQr_6q4FONYCnL-p0P89g5LlztavMnvauVZVru7j6eG9zqLFttyK9hWDFR8dK6lOoB5WCjEfAm26YhjAw5KaIyvZcQ71R93QUmr3f46mwnL_Ku6XDuKa1RGSpynBYZxCfHgpMM' }}
                            style={styles.profileImg}
                        />
                    </TouchableOpacity>

                </View>
                <Text style={styles.mainTitle}>Top students making the campus greener</Text>
                <Text style={styles.subtitleText}>Earn eco points by completing sustainability activities.</Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                {/* Podium Section */}
                <View style={styles.podiumContainer}>
                    {/* Rank 2 */}
                    <View style={styles.podiumItem}>
                        <View style={[styles.avatarWrapper, styles.rank2Border]}>
                            <Image source={{ uri: top2.avatar }} style={styles.podiumAvatar} />
                            <View style={[styles.rankBadge, styles.rank2Badge]}><Text style={styles.rankBadgeText}>2nd</Text></View>
                        </View>
                        <View style={[styles.podiumBase, styles.podiumBaseRank2]}>
                            <Text style={styles.podiumName}>{top2.name}</Text>
                            <Text style={styles.podiumPoints}>{top2.points}</Text>
                            <Text style={styles.podiumUnit}>PTS</Text>
                        </View>
                    </View>

                    {/* Rank 1 */}
                    <View style={[styles.podiumItem, styles.podiumRank1]}>
                        <View style={[styles.avatarWrapper, styles.rank1Border, styles.rank1Scale]}>
                            <Image source={{ uri: top1.avatar }} style={styles.podiumAvatar} />
                            <View style={[styles.rankBadge, styles.rank1Badge]}><Text style={styles.rankBadgeText}>1st</Text></View>
                        </View>
                        <View style={[styles.podiumBase, styles.podiumBaseRank1]}>
                            <Text style={[styles.podiumName, styles.boldName]}>{top1.name}</Text>
                            <Text style={[styles.podiumPoints, styles.bigPoints]}>{top1.points}</Text>
                            <Text style={styles.podiumUnitPrimary}>PTS</Text>
                        </View>
                    </View>

                    {/* Rank 3 */}
                    <View style={styles.podiumItem}>
                        <View style={[styles.avatarWrapper, styles.rank3Border]}>
                            <Image source={{ uri: top3.avatar }} style={styles.podiumAvatar} />
                            <View style={[styles.rankBadge, styles.rank3Badge]}><Text style={styles.rankBadgeText}>3rd</Text></View>
                        </View>
                        <View style={[styles.podiumBase, styles.podiumBaseRank3]}>
                            <Text style={styles.podiumName}>{top3.name}</Text>
                            <Text style={styles.podiumPoints}>{top3.points}</Text>
                            <Text style={styles.podiumUnit}>PTS</Text>
                        </View>
                    </View>
                </View>

                {/* Filter Chips */}
                <View style={styles.chipContainer}>
                    {['Today', 'This Week', 'This Month', 'All Time'].map((period) => (
                        <TouchableOpacity
                            key={period}
                            onPress={() => setActivePeriod(period)}
                            style={[styles.chip, activePeriod === period && styles.chipActive]}
                        >
                            <Text style={activePeriod === period ? styles.chipTextActive : styles.chipText}>{period}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Motivation Card */}
                <View style={styles.motivationCard}>
                    <View style={styles.motivationContent}>
                        <View>
                            <Text style={styles.motivationTitle}>Keep Going 🌱</Text>
                            <Text style={styles.motivationDesc}>You are only 20 points away from the Top 3!</Text>
                        </View>
                        <View style={styles.motivationIconBox}>
                            <TrendingUpIcon />
                        </View>
                    </View>
                    <View style={styles.progressTrack}>
                        <View style={[styles.progressFill, { width: '85%' }]} />
                    </View>
                </View>

                {/* List Section */}
                <View style={styles.listSection}>
                    {/* User Row Highlight */}
                    <View style={styles.userRow}>
                        <Text style={styles.rowRankHighlight}>#{currentData.userRank}</Text>
                        <View style={styles.avatarBox}>
                            <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcinqTIFvJN-EabUIxfvNnfOW-ADlQh_V2X5KJi94lGu1INCABMyPNO3YUVbTnc5SZgmDuLjSZ01OpLhRjyCNn5rNkm8DP30_wvxLn6YXc5mXB-RmwhVdAOzzWPh14prh8XmvscFQr_6q4FONYCnL-p0P89g5LlztavMnvauVZVru7j6eG9zqLFttyK9hWDFR8dK6lOoB5WCjEfAm26YhjAw5KaIyvZcQ71R93QUmr3f46mwnL_Ku6XDuKa1RGSpynBYZxCfHgpMM' }} style={styles.rowAvatarHighlight} />
                        </View>
                        <View style={styles.rowInfo}>
                            <View style={styles.rowNameContainer}>
                                <Text style={styles.rowName}>Jeeva</Text>
                                <View style={styles.positionBadge}><Text style={styles.positionBadgeText}>YOUR POSITION</Text></View>
                            </View>
                            <Text style={styles.rowSubtitle}>Eco Contributor</Text>
                        </View>
                        <View style={styles.rowPoints}>
                            <Text style={styles.pointsValue}>{currentData.userPoints}</Text>
                            <EcoIcon />
                        </View>
                    </View>

                    {currentData.others.map((item: any, index: number) => (
                        <View key={index} style={styles.row}>
                            <Text style={styles.rowRank}>#{item.rank}</Text>
                            <Image source={{ uri: item.avatar }} style={styles.rowAvatar} />
                            <View style={styles.rowInfo}>
                                <Text style={styles.rowName}>{item.name}</Text>
                                <Text style={styles.rowSubtitle}>Eco Contributor</Text>
                            </View>
                            <View style={styles.rowPoints}>
                                <Text style={styles.pointsValue}>{item.points}</Text>
                                <EcoIcon />
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>

            {/* FAB */}
            {/* <TouchableOpacity style={styles.fab}>
                <View style={{ width: 30, height: 30, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: 20, height: 4, backgroundColor: '#FFF', borderRadius: 2 }} />
                    <View style={{ position: 'absolute', width: 4, height: 20, backgroundColor: '#FFF', borderRadius: 2 }} />
                </View>
            </TouchableOpacity> */}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f6f8f6',
    },
    fixedHeader: {
        paddingTop: 50,
        paddingHorizontal: 24,
        paddingBottom: 20,
        backgroundColor: 'rgba(46, 127, 50, 0.05)',
    },

    headerTop: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    backButton: {
        width: 32,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backText: {
        fontSize: 24,
        color: '#2e7f32',
        fontWeight: 'bold',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2e7f32',
    },
    miniProfile: {
        width: 32,
        height: 32,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: 'rgba(46, 127, 50, 0.2)',
        overflow: 'hidden',
    },
    profileImg: {
        width: '100%',
        height: '100%',
    },
    mainTitle: {
        fontSize: 22,
        fontWeight: '800',
        color: '#1e293b',
        textAlign: 'center',
        marginBottom: 4,
    },
    subtitleText: {
        fontSize: 14,
        color: '#2e7f32',
        fontWeight: '500',
        textAlign: 'center',
    },
    scrollContent: {
        paddingBottom: 50,
    },

    podiumContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        gap: 8,
        paddingHorizontal: 16,
        marginTop: 20,
        marginBottom: 24,
    },
    podiumItem: {
        flex: 1,
        alignItems: 'center',
    },
    podiumRank1: {
        transform: [{ translateY: -10 }],
        zIndex: 1,
    },
    avatarWrapper: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 4,
        backgroundColor: '#FFF',
        marginBottom: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    podiumAvatar: {
        width: '100%',
        height: '100%',
        borderRadius: 30,
    },
    rank1Scale: {
        width: 76,
        height: 76,
        borderRadius: 38,
    },
    rank1Border: { borderColor: '#facc15' },
    rank2Border: { borderColor: '#cbd5e1' },
    rank3Border: { borderColor: '#fb923c' },
    rankBadge: {
        position: 'absolute',
        bottom: -8,
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 10,
    },
    rank1Badge: { backgroundColor: '#facc15' },
    rank2Badge: { backgroundColor: '#cbd5e1' },
    rank3Badge: { backgroundColor: '#fb923c' },
    rankBadgeText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#1e293b',
    },
    podiumBase: {
        width: '100%',
        backgroundColor: '#FFF',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        paddingTop: 16,
        paddingBottom: 8,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
        borderWidth: 1,
        borderBottomWidth: 0,
        borderColor: '#f1f5f9',
    },
    podiumBaseRank1: {
        height: 120,
        backgroundColor: 'rgba(46, 127, 50, 0.08)',
        borderColor: 'rgba(46, 127, 50, 0.2)',
        paddingTop: 24,
    },
    podiumBaseRank2: { height: 90 },
    podiumBaseRank3: { height: 75 },
    podiumName: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#1e293b',
    },
    boldName: { fontSize: 14, fontWeight: '900' },
    podiumPoints: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2e7f32',
        marginTop: 2,
    },
    bigPoints: { fontSize: 22, fontWeight: '900' },
    podiumUnit: {
        fontSize: 10,
        color: '#94a3b8',
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    podiumUnitPrimary: {
        fontSize: 10,
        color: '#2e7f32',
        opacity: 0.6,
        fontWeight: '900',
        letterSpacing: 1,
    },
    chipContainer: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        gap: 8,
        marginBottom: 24,
        justifyContent: 'center',
    },
    chip: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        backgroundColor: 'rgba(46, 127, 50, 0.1)',
    },
    chipActive: {
        backgroundColor: '#2e7f32',
    },
    chipText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#2e7f32',
    },
    chipTextActive: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#FFF',
    },
    motivationCard: {
        marginHorizontal: 16,
        backgroundColor: '#2e7f32',
        borderRadius: 20,
        padding: 20,
        marginBottom: 24,
        shadowColor: '#2e7f32',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 5,
    },
    motivationContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    motivationTitle: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    motivationDesc: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 14,
    },
    motivationIconBox: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        padding: 10,
        borderRadius: 12,
    },
    progressTrack: {
        height: 8,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 4,
        overflow: 'hidden',
    },
    progressFill: {
        height: '100%',
        backgroundColor: '#FFF',
        borderRadius: 4,
    },
    listSection: {
        paddingHorizontal: 16,
        gap: 10,
    },
    userRow: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(46, 127, 50, 0.1)',
        borderRadius: 16,
        padding: 12,
        borderWidth: 1,
        borderColor: 'rgba(46, 127, 50, 0.2)',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 16,
        padding: 12,
        borderWidth: 1,
        borderColor: '#f1f5f9',
    },
    rowRankHighlight: {
        width: 32,
        fontSize: 16,
        fontWeight: '900',
        color: '#2e7f32',
        textAlign: 'center',
    },
    rowRank: {
        width: 32,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#94a3b8',
        textAlign: 'center',
    },
    avatarBox: {
        marginRight: 12,
    },
    rowAvatarHighlight: {
        width: 48,
        height: 48,
        borderRadius: 24,
        borderWidth: 2,
        borderColor: '#2e7f32',
    },
    rowAvatar: {
        width: 44,
        height: 44,
        borderRadius: 22,
        marginRight: 12,
    },
    rowInfo: {
        flex: 1,
    },
    rowNameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    rowName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#1e293b',
    },
    positionBadge: {
        backgroundColor: '#2e7f32',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 10,
    },
    positionBadgeText: {
        color: '#FFF',
        fontSize: 8,
        fontWeight: '900',
    },
    rowSubtitle: {
        fontSize: 12,
        color: '#64748b',
        marginTop: 2,
    },
    rowPoints: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    pointsValue: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2e7f32',
    },
    fab: {
        position: 'absolute',
        bottom: 90,
        right: 24,
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: '#2e7f32',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#2e7f32',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
        zIndex: 100,
    },
});

export default LeaderboardScreen;
