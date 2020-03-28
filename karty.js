function addivs(ilosc) {
  if (rozdane == true) {
    alert('Karty już były rozdane');
    return 'Karty rozdane';
  }
  rozdane = true;
  var divy = document.createDocumentFragment();
  for (i = 1; i <= ilosc; i++) {
    var newdiv = document.createElement('div');
    newdiv.id = 'karta' + i;
    newdiv.textContent = i;
    newdiv.position = 'absoulte';
    newdiv.style.top = '-250px';
    newdiv.style.left = '45vw';
    newdiv.style.transition = 'top 2s, left 2s';
    divy.appendChild(newdiv);
  }
  document.getElementById('karty').appendChild(divy);
  styledivs(ilosc);
}

function styledivs(ilosc) {
  for (i = 1; i <= ilosc; i++) {
    var aktualnakarta = document.getElementById('karta' + i);
    aktualnakarta.style.backgroundColor = '#' + i + i + '5625'; //kolor karty
    aktualnakarta.style.width = '150px';
    aktualnakarta.style.height = '200px';
    aktualnakarta.style.border = 'thick outset #' + i + i + '3377';
    aktualnakarta.style.position = 'absolute'; //pozycja karty

    var posx = document.getElementById('karty').clientWidth;
    var wyn = (posx / 2) - 75;
    var kart = i % 2;
    //alert(kart);
    if (i == 1) {
      aktualnakarta.style.left = wyn + 'px';
      aktualnakarta.style.top = '50px';
    } else if (kart == 1) {
      wyn = wyn + (i - 1) * 60;
      aktualnakarta.style.left = wyn + 'px';
      aktualnakarta.style.transform = 'rotate(' + i + 'deg)';
    } else {
      wyn = wyn + i * -60;
      aktualnakarta.style.left = wyn + 'px';
      aktualnakarta.style.transform = 'rotate(-' + i + 'deg)';
    }
    var wyntoppar = 50;
    var wyntop = [];
    wyntop[i] = 0 + i * 4;
    aktualnakarta.style.top = wyntop[i] + 'px';
    aktualnakarta.style.zIndex = -i + ilosc;

    aktualnakarta.onmouseenter = function mouseover() {
      this.style.zIndex = ilosc + 1;
      this.style.top = ' -200px';
      this.style.height = '350px';
      this.style.width = '200px';
      this.style.transition = 'all 0ms'; //};

      // aktualnakarta.onmouseenter = function mouseenter(){
      //    function resetet()
      //   {
      //   document.getElementById('flash').style.transition='all 0s';
      //   document.getElementById('flash').style.opacity=1;
      //   }
      //     document.getElementById('flash').style.top=this.style.top;
      //   document.getElementById('flash').style.left=this.style.left;
      // document.getElementById('flash').style.transition='opacity 2555ms, transform 2550ms';
      // document.getElementById('flash').style.transform='scale(2)';
      //  document.getElementById('flash').style.opacity=0.6;
      //  document.getElementById('flash').style.opacity=0.1;
      //  document.getElementById("flash").addEventListener("transitionend", alert());

    }



    aktualnakarta.onmouseout = function mouseout() {
      var numer = this.textContent;
      this.style.zIndex = -numer + ilosc;
      this.style.top = 0 + numer * 4 + 'px';
      this.style.height = '200px';
      this.style.width = '150px';
      this.style.transition = 'all 1000ms, z-index 25ms';
    }




  }
}
}
