import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Audio } from 'expo-av';
import styles, { color } from './styles';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

// Image and Audio
import music1 from './assets/image/music1.jpg';
import music2 from './assets/image/music2.jpg';

const App = () => {
  const songs = [
    {
      id: 1,
      title: 'Line Without a Hook',
      artist: 'Ricky Montgomery',
      image: require('./assets/image/music1.jpg'),
      description: 'lagu yang menggambarkan perasaan cinta tak terbalas dengan nuansa melankolis dan penuh keputusasaan.',
      audio: require('./assets/audio/music1.mp3'),
    },
    {
      id: 2,
      title: 'Hey Im Tired',
      artist: 'Arash Buana',
      image: require('./assets/image/music2.jpg'),
      description: 'menggambarkan perasaan lelah secara emosional dan mental dalam menghadapi hubungan yang rumit, dengan sentuhan melodi yang lembut dan reflektif',
      audio: require('./assets/audio/music2.mp3'),
    },
    {
      id: 3,
      title: 'Asing',
      artist: 'Juicy Luicy',
      image: require('./assets/image/music3.jpg'),
      description: 'Asing oleh Juicy Luicy bercerita tentang sepasang kekasih yang perlahan merasa seperti orang asing satu sama lain',
      audio: require('./assets/audio/music3.mp3')
    },
    {
      id: 4,
      title: 'Ghost',
      artist: 'Skinnyfabs',
      image: require('./assets/image/music4.jpg'),
      description: 'Ghost oleh Skinnyfabs menggambarkan rasa kehilangan dan ketidakpastian setelah ditinggalkan tanpa penjelasan, seolah-olah orang yang dicintai menghilang seperti hantu.',
      audio: require('./assets/audio/music4.mp3')
    },
    {
      id: 5,
      title: 'Nothing Compares to You',
      artist: 'Takayoshi',
      image: require('./assets/image/music5.jpg'),
      description: 'Nothing Compares to You oleh Takayoshi menyampaikan kerinduan mendalam pada seseorang yang tak tergantikan, menggambarkan rasa kehilangan yang tak terobati oleh waktu.',
      audio: require('./assets/audio/music5.mp3')
    },
    {
      id:6,
      title: 'Never Mine',
      artist: 'After Nourway',
      image: require('./assets/image/music6.jpg'),
      description: 'Never Mine oleh Norway mengungkapkan perasaan cinta yang tak terbalas, dengan lirik yang penuh kesedihan dan melodi yang mendalam, menggambarkan seseorang yang mencintai tanpa harapan untuk memilikinya.',
      audio: require('./assets/audio/music6.mp3'),
    },
    {
      id:7,
      title: 'Favorite Lesson',
      artist: 'Yaeow',
      image: require('./assets/image/music7.jpg'),
      description:'Favorite Lesson oleh Yaeow menggambarkan perjalanan emosional dalam hubungan yang penuh kenangan, dengan lirik yang reflektif tentang kesalahan dan pembelajaran dari masa lalu.',
      audio: require('./assets/audio/music7.mp3')
    },
    {
      id:8,
      title: 'I Cant Hate You',
      image: require('./assets/image/music8.jpg'),
      description: 'I Cant Hate You oleh Kayou mengungkapkan perasaan yang kompleks antara cinta dan kebencian, di mana meskipun ada rasa sakit,',
      audio: require('./assets/audio/music8.mp3')
    },
    {
      id: 9,
      title: 'An Art Gallery Could Never be as Unique as You',
      image: require('./assets/image/music9.jpg'),
      description: 'menggambarkan betapa istimewanya seseorang, melebihi keindahan dan keunikan apa pun yang dapat ditemukan di galeri seni, dengan lirik yang penuh pujian dan melodi yang lembut.',
      audio: require('./assets/audio/music9.mp3')
    },
    {
      id: 10,
      title: 'When I Was Your Man',
      artist: 'Bruno Mars',
      image: require('./assets/image/music10.jpg'),
      description: 'mengungkapkan penyesalan mendalam dari seseorang yang menyadari kesalahan dalam hubungan yang telah berakhir',
      audio: require('./assets/audio/music10.mp3')
    }
  ];

  const [bg, setBg] = useState('transparent');
  const [bg2, setBg2] = useState('transparent');
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);
  const [currentSongId, setCurrentSongId] = useState(1);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const loadAudio = async (audioFile) => {
    try {
      // Unload the current sound if it exists
      if (sound) {
        await sound.unloadAsync();
      }
      // Create a new sound instance
      const { sound: newSound } = await Audio.Sound.createAsync(audioFile);
      setSound(newSound);
      return newSound;  // Return the new sound instance
    } catch (error) {
      console.error('Error loading audio:', error);
      return null;
    }
  };

  const handlePlayPause = async (songId, audioFile) => {
    try {
      // If a different song is selected, load it
      if (currentSongId !== songId) {
        if (sound) {
          await sound.unloadAsync();  // Unload previous sound
        }
        setCurrentSongId(songId);
        const newSound = await loadAudio(audioFile);  // Load new audio
        if (newSound) {
          await newSound.playAsync();  // Play new audio
          setIsPlaying(true);
        }
      } else {
        if (isPlaying) {
          await sound.pauseAsync();  // Pause if currently playing
        } else {
          await sound.playAsync();  // Play if currently paused
        }
        setIsPlaying(!isPlaying);
      }
    } catch (error) {
      console.error('Error playing audio:', error);
    }
  };

  const handleNext = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
    playAudio(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(prevIndex);
    playAudio(prevIndex);
  };

  const playAudio = async (index) => {
    const song = songs[index];
    try {
      if (song) {
        const newSound = await loadAudio(song.audio);  // Load new song
        if (newSound) {
          await newSound.playAsync();  // Play the new song
          setIsPlaying(true);  // Set playing state to true
        }
      } else {
        console.error('Song not found');
      }
    } catch (error) {
      console.error('Error playing audio:', error);
    }
  };

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();  // Clean up the sound object when the component is unmounted
      }
    };
  }, [sound]);

  const handleBgIn = () => {
    setBg(color.hover);
  };
  const handleBgOut = () => {
    setBg('transparent');
  };
  const handleBgIn2 = () => {
    setBg2(color.hover);
  };
  const handleBgOut2 = () => {
    setBg2('transparent');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity
            activeOpacity={1}
            onPressIn={handleBgIn}
            onPressOut={handleBgOut}
          >
            <View style={[styles.btn, { backgroundColor: bg }]}>
              <AntDesign name="left" size={24} color={color.white} />
            </View>
          </TouchableOpacity>

          <Text style={styles.title}>FAVORITE</Text>

          <TouchableOpacity
            activeOpacity={1}
            onPressIn={handleBgIn2}
            onPressOut={handleBgOut2}
          >
            <View style={[styles.btn, { backgroundColor: bg2 }]}>
              <Ionicons name="ellipsis-vertical-sharp" size={24} color={color.white} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.headerBottom}>
          <View style={styles.option}>
            <Text style={styles.subtitle}>Film</Text>
            <Text style={[styles.subtitle, styles.active]}>Music</Text>
            <Text style={styles.subtitle}>Food</Text>
          </View>
          <View style={styles.line}></View>
        </View>
      </View>
      <View style={styles.boxShadow}></View>

      <ScrollView style={styles.contentContainer}>
        <View style={styles.contents}>
          <View style={styles.cardWrapper}>
            {songs.map((song) => (
              <View key={song.id} style={styles.card}>
                <View style={styles.content}>
                  <View style={styles.img}>
                    <Image source={song.image} style={styles.img} />
                  </View>
                  <View style={styles.info}>
                    <View style={styles.infoTop}>
                      <Text style={styles.judulMusic}>{song.title}</Text>
                      <Text style={styles.singer}>{song.artist}</Text>
                    </View>
                    <Text style={styles.description}>{song.description}</Text>
                  </View>
                </View>
                <View style={styles.btnGroup}>
                  <TouchableOpacity activeOpacity={1} onPress={handlePrev}>
                    <View style={[styles.btn, styles.btnPrev]}>
                      <AntDesign name="stepbackward" size={20} color="black" />
              
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity activeOpacity={1} onPress={() => handlePlayPause(song.id, song.audio)}>
                    <View style={[styles.btn, styles.btnPlayPause]}>
                      <AntDesign
                        name={isPlaying && currentSongId === song.id ? 'pause' : 'caretright'}
                        size={20}
                        color="black"
                      />
                  
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity activeOpacity={1} onPress={handleNext}>
                    <View style={[styles.btn, styles.btnNext]}>
                      <AntDesign name="stepforward" size={20} color="black" />
                      
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default App;
