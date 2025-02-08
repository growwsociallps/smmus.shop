$('#loginRemember, #remember').change(function() {
        // Get the checked state of the clicked checkbox
        const isChecked = $(this).is(':checked');
        
        // Set the checked state for both checkboxes
        $('#loginRemember, #remember').prop('checked', isChecked);
    });
      $('.feat-slider').slick({
                    dots: false,
          arrows: true,
          autoplay: false,
          slidesToShow: 4,
          responsive:[
              {
              breakpoint: 767,
              settings: {
                  slidesToShow: 3,
              }
              },
              {
              breakpoint: 500,
              settings: {
                  slidesToShow: 2,
              }
              },
          ],
          slidesToScroll: 1,
          infinite: false,
          speed: 500,
          adaptiveHeight: false
        });
      $('.testi-slider').slick({
                    dots: false,
          arrows: true,
          autoplay: false,
          slidesToScroll: 1,
          slidesToShow: 3,
          infinite: false,
          speed: 500,
          adaptiveHeight: false,
          appendArrows: $(".news_slider"),
          responsive: [
            //   {
            //   breakpoint: 600,
            //   settings: {
            //       slidesToShow: 2,
            //   }
            //   },
              {
              breakpoint: 600,
              settings: {
                  slidesToShow: 1,
              }
              },
            {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
            }
            },
        ]
        });
		function socialData(cat) {
          let arr = [];

          switch (cat) {
              case '🌍 Travel':
                  arr.push({
                      img: 'https://groww-social.github.io/1050/Images/manoranjan.png',
                      name: '@manoranjan8618',
                      subs: '10,192',
                      likes: '108',
                      followers: document.title === "TikTok" ? '80,913' : '80,913',
                      growth: document.title === "TikTok" ? '4,618,934' : '7,33,593',
                      fullname: 'MANORANJAN BEHERA',
                      desc: "We're bringing you travel guides, destination highlights, and unforgettable adventures.",
                      website: 'www.viralkaro.shop'
                  })
                  break;
              case '💪 Fitness':
                  arr.push({
                      img: 'https://groww-social.github.io/1050/Images/xhxy1lt2k6df3ge0.jpg',
                      name: '@jessicaolie',
                      subs: '2,223',
                      likes: '319',
                      followers: document.title === "TikTok" ? '14,543' : '330,134',
                      growth: document.title === "TikTok" ? '47,519' : '740,414',
                      fullname: 'Jessica Olie',
                      desc: "Yoga teacher & creator of the #LETSSTARTYOGA challenges. Join my online studio for on-demand...",
                      website: 'www.jessicaolie.com'
                  })
                  break;
              case '🍔 Food':
                  arr.push({
                      img: 'https://groww-social.github.io/1050/Images/1hhwciird09r28sr.jpg',
                      name: '@buzzfeedtasty',
                      subs: '6,343',
                      likes: '348',
                      followers: document.title === "TikTok" ? '2,421,530' : '17,317,391',
                      growth: document.title === "TikTok" ? '4,543,907' : '45,915,113',
                      fullname: 'Tasty',
                      desc: "Easy, delicious recipes. Tasty.co",
                      website: 'tasty.co'
                  })
                  break;
              case '👗 Fashion':
                  arr.push({
                      img: 'https://groww-social.github.io/1050/Images/bka5f0isp9760c3b.jpg',
                      name: '@repeller',
                      subs: '4,712',
                      likes: '1,033',
                      followers: document.title === "TikTok" ? '14' : '480,221',
                      growth: document.title === "TikTok" ? '15,258' : '2,409,812',
                      fullname: 'Man Repeller',
                      desc: "Where an interest in fashion never minimizes ones intellect.",
                      website: 'www.repeller.com'
                  })
                  break;              
              case '🎨 Art':
                  arr.push({
                      img: 'https://groww-social.github.io/1050/Images/f5u9fsesrzcoaxmn.jpg',
                      name: '@artnet',
                      subs: '8,008',
                      likes: '604',
                      followers: document.title === "TikTok" ? '230,318' : '370,159',
                      growth: document.title === "TikTok" ? '1,040,029' : '1,201,818',
                      fullname: 'Artnet',
                      desc: "The Art World Online",
                      website: 'www.artnet.com'
                  })
                  break;
              case '🖥️ Technology':
                  arr.push({
                      img: 'https://groww-social.github.io/1050/Images/nmjqahis50fcl069.jpg',
                      name: '@techcrunch',
                      subs: '9,338',
                      likes: '82',
                      followers: document.title === "TikTok" ? '2,923' : '139,009',
                      growth: document.title === "TikTok" ? '19,544' : '1,558,951',
                      fullname: 'TechCrunch',
                      desc: "Breaking technology news, analysis, and opinions from TechCrunch. The number one guide for all things tech.",
                      website: 'www.techcrunch.com'
                  })
                  break;
              case '💼 Business':
                  arr.push({
                      img: 'https://groww-social.github.io/1050/Images/u1ii1g2pi7hkg4fp.jpg',
                      name: '@forbes',
                      subs: '6,916',
                      likes: '406',
                      followers: document.title === "TikTok" ? '171,391' : '4,112,454',
                      growth: document.title === "TikTok" ? '408,304' : '6,513,511',
                      fullname: 'Forbes',
                      desc: "The homepage for Forbes' business news.",
                      website: 'www.forbes.com'
                  })
                  break;
              
              default:
                  arr.push({
                      img: 'https://groww-social.github.io/1050/Images/xhxy1lt2k6df3ge0.jpg',
                      name: '@jessicaolie',
                      subs: '2,223',
                      likes: '319',
                      followers: document.title === "TikTok" ? '14,543' : '330,134',
                      growth: document.title === "TikTok" ? '47,519' : '740,414',
                      fullname: 'Jessica Olie',
                      desc: "Yoga teacher & creator of the #LETSSTARTYOGA challenges. Join my online studio for on-demand...",
                      website: 'www.jessicaolie.com'
                  })
          }

          return arr;
      }

      let cat = '';
      let data = '';

      setTimeout(() => {
          $('.after').trigger('click');
      }, 5000);

      $('.social-tag').on("click", function () {
          $('.social-tag').removeClass('tag-active');
          $(this).toggleClass('tag-active');
          cat = this.innerText;
          data = socialData(cat)

          if ($('.after').hasClass('social-aboutactive')) {

              $('.social-avatar img').attr('src', data[0].img);
              $('.social-name span').text(data[0].name);
              $('.social-followers .social-numbers').text(data[0].growth);
              $('.social-followers .social-numbers').addClass('nzGrowth').fadeIn('slow');
              $('.social-likes .social-numbers').text(data[0].likes);
              $('.social-subs .social-numbers').text(data[0].subs);
              if (document.title == "Naizop - One Website For All Social Media Services!" || document.title == "TikTok") {
                  $('.insta-info .insta-name').text(data[0].fullname);
                  $('.insta-info .insta-desc').text(data[0].desc);
                  $('.insta-info .insta-web').text(data[0].website);
              }

          } else {
              $('.social-avatar img').attr('src', data[0].img);
              $('.social-name span').text(data[0].name);
              $('.social-followers .social-numbers').text(data[0].followers);
              $('.social-likes .social-numbers').text(data[0].likes);
              $('.social-subs .social-numbers').text(data[0].subs);
              if (document.title == "Naizop - One Website For All Social Media Services!" || document.title == "TikTok") {
                  $('.insta-info .insta-name').text(data[0].fullname);
                  $('.insta-info .insta-desc').text(data[0].desc);
                  $('.insta-info .insta-web').text(data[0].website);
              }
          }



      });

      $('.after, .before').on("click", function () {
          $('.after.social-aboutactive, .before.social-aboutactive').removeClass('social-aboutactive');
          $(this).addClass('social-aboutactive');

          if ($('.after').hasClass('social-aboutactive')) {
              if (!data) {
                  data = socialData()
              }
              $('.social-avatar img').attr('src', data[0].img);
              $('.social-name span').text(data[0].name);
              $('.social-followers .social-numbers').text(data[0].growth);
              $('.social-followers .social-numbers').addClass('nzGrowth').fadeIn('slow');
              $('.social-likes .social-numbers').text(data[0].likes);
              $('.social-subs .social-numbers').text(data[0].subs);
              if (document.title == "Naizop - One Website For All Social Media Services!" || document.title == "TikTok") {
                  $('.insta-info .insta-name').text(data[0].fullname);
                  $('.insta-info .insta-desc').text(data[0].desc);
                  $('.insta-info .insta-web').text(data[0].website);
              }

          } else {
              $('.social-followers .social-numbers.nzGrowth').removeClass('nzGrowth');
              $('.social-followers .social-numbers').text(data[0].followers);
          }

      });
