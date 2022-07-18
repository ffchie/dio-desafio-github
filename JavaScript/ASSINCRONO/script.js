const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getById('change-cat');

const getCats = async () => {
    const data = await fetch(BASE_URL);
      .then(res=> res.json());
      .catch(e => console.log(e));
      
      return data.webpurl;
};

const loadImg = async () =>{
    const catImg = document.getElementById('cat');
    catImg.src = await getCats();
}

catBtn.addEventListner('click', loadImg);

loadImg();