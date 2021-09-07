
const body=document.querySelector('body');
        function darkLightMode(){            
            body.classList.toggle('dark');
            changeIcon();
        }

        function changeIcon(){
            const dark=document.querySelector('.darkBright');
            if(body.classList.contains('dark'))
            {
                dark.innerHTML='<ion-icon name="sunny-outline"></ion-icon>';
            }
            else{
                dark.innerHTML='<ion-icon name="moon-outline"></ion-icon>';
            }
        }

       



        const image=document.querySelector('.image');
        const title=document.querySelector('.title');
        const prev=document.querySelector('.prev');
        const playPause=document.querySelector('.playPause');
        const next=document.querySelector('.next');
        const audio=document.querySelector('audio');
        const download=document.querySelector('.download');
        const progress=document.querySelector('#seekbar');
        const below=document.querySelector('.below');


        const animationSpan=below.children;      

        


        // song list

        const songList =[
            {
                path: "Chand_Si_Mehbooba.mp3",
                songName: "Chand Si Mehbooba",
                image: "url(chand_si_mehbooba.jfif)",
            },
            {
                path: "Dil_Ko_Karar_Aaya.mp3",
                songName: "Dil Ko Karar Aaya",
                image: "url(Dil_Ko_Karar_Aaya.webp)",
            },
            {
                path: "Maine_Puchha_Chand.mp3",
                songName: "Maine Puchha Chand",
                image: "url(Maine_Puchha_Chand.jpg)",
            },
            {
                path: "Bella_Ciao.mp3",
                songName: "Bella Ciao",
                image: "url(Bella_Ciao.jpg)",
            },
            {
                path: "my_life_is_going.mp3",
                songName: "My Life Is Going On",
                image: "url(life_is_going_on.jpg)",
            },
            {
                path: "Ranjha.mp3",
                songName: "Ranjha",
                image: "url(Ranjhna.jpg)",
            },
            {
                path: "Raataan_Lambiyan.mp3",
                songName: "Raataan Lambiyan",
                image: "url(raataan_lambia.jpg)",
            },
            {
                path: "Believer.mp3",
                songName: "Believer- Imagine Dragons",
                image: "url(beliver.jpg)",
            },
            {
                path: "Love_Me_Like_You_Do.mp3",
                songName: "Love Me Like You Do",
                image: "url(love_me_like_you_do.jpg)",
            },
            {
                path: "Senorita.mp3",
                songName: "Senorita",
                image: "url(senorita.jpg)",
            },
            {
                path: "tujhme_rab_female.mpeg",
                songName: "Tujhme Rab Dikhta Hai-Female",
                image: "url(tujhme_rab_female.jpg)",
            },
            {
                path: "tumse_hi.mpeg",
                songName: "Tumse Hi",
                image: "url(tumse_hi.webp)",
            },
            {
                path: "makhna.mpeg",
                songName: "Makhna",
                image: "url(makhna.jpg)",
            },
        ];

        let song_Playing=false;

        // play song
        function playSong(){
            song_Playing=true;
            audio.play();
            playPause.classList.add('active');
                
            // onclick animation start
           for(var i=0;i<animationSpan.length;i++)
           {
              animationSpan[i].classList.add('animSpan');
           }

            
            //change icon
            playPause.innerHTML='<ion-icon name="pause-outline"></ion-icon>'
            
        }
        // pause song
        function pauseSong(){
            song_Playing=false;
            audio.pause();
            playPause.classList.remove('active');

            // onclick animation stop
            for(var i=0;i<animationSpan.length;i++)
            {
                 animationSpan[i].classList.remove('animSpan');
            }
           
            // change icon
            playPause.innerHTML='<ion-icon name="play-outline"></ion-icon>'

        }
        // on click play and pause
        playPause.addEventListener("click", () => (song_Playing?
        pauseSong():playSong()))

        // playPause.addEventListener("click", () => (song_Playing?
        //     playAnimation():pauseAnimation()))

        //load song
        function loadSong(songList){
            title.textContent= songList.songName;
            audio.src = songList.path;
            image.style.backgroundImage = songList.image;
            download.href=songList.path;
            download.download=songList.songName;
            audio.addEventListener('ended',function(){
                this.currentTime=0;
                this.play();
            },false);

           


        //  current song
        let i=1;

        // onload select first song from list
        loadSong(songList[i])
                
                
                

        function prevSong(){
            i--;
            if(i<0)
            {
                i=songList.length-1;
            }
            loadSong(songList[i]);
            playSong();
        }
        prev.addEventListener("click",prevSong)

        function nextSong(){
            i++;
            if(i>songList.length-1)
            {
                i=0;
            }
            loadSong(songList[i]);
            playSong();
        }
        next.addEventListener("click",nextSong)
