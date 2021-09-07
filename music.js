
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

        const slider=document.querySelector('#duration_slider');
        const show_duration=document.querySelector('#show_duration')

        const recent_volume = document.querySelector('#volume');
        const volume_show = document.querySelector('.volume_show');

        const auto_play=document.querySelector('#auto');

        const present=document.querySelector('#present');
        const total=document.querySelector('#total');

        let timer;

        let autoplay = 0;
        

        const animationSpan=below.children;
        // volume_show.innerHTML=recent_volume.value;
       
        

        // function playAnimation(){
        //     for(var i=0;i<belowSpan.length;i++)
        //     {
        //         belowSpan[i].style.webkitAnimation="playingmusic 2s linear infinite";
        //         belowSpan[i].style.webkitAnimationDelay= "calc(var(--i) * 0.1s)";
        //     }
        // }

        // function pauseAnimation(){
        //     for(var i=0;i<belowSpan.length;i++)
        //     {
        //         belowSpan[i].style.webkitAnimation=" ";
        //     }
        // }



        


        

        


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

        // audio.addEventListener("timeupdate",function(){
        //         progress.value=( this.currentTime/this.duration )*10;
        //     });

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

            // audio.addEventListener("timeupdate",function(){
            //     progress.value=( 5/10 );
            // });
           
            // change icon
            playPause.innerHTML='<ion-icon name="play-outline"></ion-icon>'

        }
        // on click play and pause
        playPause.addEventListener("click", () => (song_Playing?
        pauseSong():playSong()))

        // playPause.addEventListener("click", () => (song_Playing?
        //     playAnimation():pauseAnimation()))

        //load song
        function loadSong(i){
            clearInterval(timer);
            reset_slider();
            title.textContent= songList[i].songName;
            audio.src = songList[i].path;
            image.style.backgroundImage = songList[i].image;
            download.href=songList[i].path;
            download.download=songList[i].songName;

            total.innerHTML = songList.length;
            present.innerHTML= i+1;
            timer = setInterval(range_slider,1000);


            // audio.addEventListener('ended',function(){
            //     this.currentTime=0;
            //     this.play();
            // },false);

           

//             $('#player').on('timeupdate', function() {
//     $('#seekbar').attr("value", this.currentTime / this.duration);
// });
            
            // audio.onprogress= function(){
            // progress.value=this.currentTime/this.duration;
            // };
        }
        //  ccurrent song
        let i=0;

        // onload select first song from list
        loadSong(i)


        function reset_slider(){
            slider.value=0;
        }

        function prevSong(){
            i--;
            if(i<0)
            {
                i=songList.length-1;
            }
            loadSong(i);
            playSong();
        }
        prev.addEventListener("click",prevSong)

        function nextSong(){
            i++;
            if(i>songList.length-1)
            {
                i=0;
            }
            loadSong(i);
            playSong();
        }
        next.addEventListener("click",nextSong)

        function mute_sound(){
            audio.volume=0;
            volume.value =0;
            volume_show.innerHTML=0;
        }

        function volume_change(){
            // alert("hello");
            volume_show.innerHTML= recent_volume.value;
            audio.volume=recent_volume.value / 100;  
        }

        function change_duration(){
            slider_position = audio.duration * (slider.value/100);
            audio.currentTime = slider_position;
        }

        function autoplay_switch(){
            auto_play.classList.toggle('active');
            if(autoplay==1)
            {
                autoplay=0;
                
            }
            else{
                autoplay=1;
            }
        }

        function range_slider(){
            let position = 0;

            if(!isNaN(audio.duration))
            {
                position=audio.currentTime * (100/audio.duration);
                slider.value = position;
            }



         if(audio.ended)
            {

                // auto_play.style.background="red";
                if(autoplay==1)
                {
                    i+=1;
                    loadSong(i);
                    playSong();
                }
            }

        }
