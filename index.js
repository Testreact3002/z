const data = {
    "rating": [
		{
			"id": "123",
			"name": "Владимир",
			"lastName": "Ларионов",
			"img": "images/m1.png",
			"points": "463"
		},
		{
			"id": "9",
			"name": "Владимир",
			"lastName": "Сергеев",
			"img": "images/m2.png",
			"points": "521"
		},
		{
			"id": "231",
			"name": "Вениамин",
			"lastName": "Васильев",
			"img": "images/m3.png",
			"points": "865"
		},
		{
			"id": "321",
			"name": "Мария",
			"lastName": "Логинова",
			"img": "images/f1.png",
			"points": "865"
		},
		{
			"id": "492",
			"name": "Борис",
			"lastName": "Казанцев",
			"img": "images/m4.png",
			"points": "784"
		},
		{
			"id": "452",
			"name": "Полина",
			"lastName": "Калинина",
			"img": "images/f2.png",
			"points": "225"
		},
		{
			"id": "796",
			"name": "Даниил",
			"lastName": "Воробьёв",
			"img": "images/m1.png",
			"points": "642"
		},
		{
			"id": "4",
			"name": "Эрик",
			"lastName": "Аксёнов",
			"img": "images/m4.png",
			"points": "150"
		},
		{
			"id": "1155",
			"name": "Иван",
			"lastName": "Иванов",
			"img": "images/m3.png",
			"points": "100"
		},
		{
			"id": "12145",
			"name": "Артем",
			"lastName": "Алексеев",
			"img": "images/m2.png",
			"points": "1000"
		}
    ],
    "friends": [
        {
            "id": "9",
            "name": "Владимир",
            "lastName": "Сергеев",
            "img": "images/m2.png"
        },
        {
            "id": "4",
            "name": "Эрик",
            "lastName": "Аксёнов",
            "img": "images/m4.png"
        },
        {
            "id": "15411",
            "name": "Ирина",
            "lastName": "Чеснокова",
            "img": "images/f6.png"
        },
        {
            "id": "15564",
            "name": "Дарина",
            "lastName": "Боброва",
            "img": "images/f1.png"
        }
    ]
}
var list = document.getElementsByClassName('friendlist__list')[0];
var   p=`443.00,504.00 443.00,504.00 443.00,504.00  
             443.00,504.00 420.00,493.50 420.00,493.50
             420.00,493.50 389.00,465.00 389.00,465.00
             389.00,465.00 351.50,476.00 351.50,476.00
             351.50,476.00 313.50,500.00 313.50,500.00
             313.50,500.00 279.00,519.50 279.00,519.50
             279.00,519.50 238.50,534.50 238.50,534.50
             238.50,534.50 190.00,537.50 190.00,537.50
             190.00,537.50 145.00,528.00 145.00,528.00
             145.00,528.00 110.50,509.50 110.50,509.50
             110.50,509.50 84.00,488.50 84.00,488.50
             84.00,488.50 84.00,476.50 84.00,476.50
             84.00,476.50 123.00,444.00 123.00,444.00
             123.00,444.00 113.00,418.50 113.00,418.50
             113.00,418.50 126.50,399.00 126.50,399.00
             126.50,399.00 143.50,387.50 143.50,387.50
             143.50,387.50 216.50,351.50 216.50,351.50
             216.50,351.50 238.50,328.50 238.50,328.50
             238.50,328.50 232.50,318.00 232.50,318.00
             232.50,318.00 177.00,280.50 177.00,280.50
             177.00,280.50 141.50,261.50 141.50,261.50
             141.50,261.50 122.50,244.00 122.50,244.00
             122.50,244.00 138.50,228.00 138.50,228.00
             138.50,228.00 163.00,215.50 163.00,215.50
             163.00,215.50 152.50,191.00 152.50,191.00
             152.50,191.00 160.00,181.50 160.00,181.50
             160.00,181.50 184.00,179.50 184.00,179.50
             184.00,179.50 200.50,196.50 200.50,196.50
             200.50,196.50 219.50,219.50 219.50,219.50
             219.50,219.50 246.50,243.50 246.50,243.50
             246.50,243.50 254.50,244.00 254.50,244.00
             254.50,244.00 281.50,239.50 281.50,239.50
             281.50,239.50 292.00,230.00 292.00,230.00
             292.00,230.00 299.00,206.50 299.00,206.50
             299.00,206.50 281.00,161.00 281.00,161.00
             281.00,161.00 290.00,156.00 290.00,156.00
             290.00,156.00 331.50,156.50 331.50,156.50
             331.50,156.50 342.50,149.00 342.50,149.00
             342.50,149.00 340.00,137.50 340.00,137.50
             340.00,137.50 374.00,110.00 374.00,110.00
             374.00,110.00 376.00,88.00 376.00,88.00
             376.00,88.00 375.00,73.50 375.00,73.50
             375.00,73.50 377.00,50.50 377.00,50.50
             377.00,50.50 399.00,34.50 399.00,34.50
             399.00,34.50 421.50,39.50 421.50,39.50
             421.50,39.50 439.50,57.50 439.50,57.50
             439.50,57.50 499.50,68.00 499.50,68.00
             499.50,68.00 507.50,78.50 507.50,78.50
             507.50,78.50 492.00,86.50 492.00,86.50
             492.00,86.50 480.00,92.50 480.00,92.50
             480.00,92.50 475.50,117.00 475.50,117.00
             475.50,117.00 461.50,152.00 461.50,152.00
             461.50,152.00 461.50,163.50 461.50,163.50
             461.50,163.50 472.00,175.50 472.00,175.50
             472.00,175.50 494.00,194.00 494.00,194.00
             494.00,194.00 496.00,209.50 496.00,209.50
             496.00,209.50 487.00,224.00 487.00,224.00
             487.00,224.00 473.00,242.00 473.00,242.00
             473.00,242.00 469.50,279.00 469.50,279.00
             469.50,279.00 457.00,300.00 457.00,300.00
             457.00,300.00 440.50,314.50 440.50,314.50
             440.50,314.50 386.50,347.50 386.50,347.50
             386.50,347.50 344.00,375.50 344.00,375.50
             344.00,375.50 345.50,392.00 345.50,392.00
             345.50,392.00 375.00,411.50 375.00,411.50
             375.00,411.50 419.50,429.00 419.50,429.00
             419.50,429.00 454.00,428.00 454.00,428.00
             454.00,428.00 525.50,468.50 525.50,468.50
             525.50,468.50 566.00,493.00 566.00,493.00
             566.00,493.00 605.50,510.00 605.50,510.00
             605.50,510.00 622.00,500.00 622.00,500.00
             622.00,500.00 633.00,483.00 633.00,483.00
             633.00,483.00 656.50,480.50 656.50,480.50
             656.50,480.50 699.00,520.50 699.00,520.50
             699.00,520.50 716.50,524.00 716.50,524.00
             716.50,524.00 764.50,498.00 764.50,498.00
             764.50,498.00 807.50,471.00 807.50,471.00
             807.50,471.00 847.50,445.00 847.50,445.00
             847.50,445.00 884.00,422.00 884.00,422.00
             884.00,422.00 918.50,405.50 918.50,405.50
             918.50,405.50 948.50,384.50 948.50,384.50
             948.50,384.50 968.00,354.00 968.00,354.00
             968.00,354.00 960.00,315.00 960.00,315.00
             960.00,315.00 937.00,287.50 937.00,287.50
             937.00,287.50 902.50,287.00 902.50,287.00
             902.50,287.00 879.00,304.00 879.00,304.00
             879.00,304.00 842.00,325.50 842.00,325.50
             842.00,325.50 784.00,362.00 784.00,362.00
             784.00,362.00 755.50,372.50 755.50,372.50
             755.50,372.50 719.00,352.00 719.00,352.00
             719.00,352.00 697.00,329.00 697.00,329.00
             697.00,329.00 696.00,313.00 696.00,313.00
             696.00,313.00 725.00,298.00 725.00,298.00
             725.00,298.00 797.50,257.50 797.50,257.50
             797.50,257.50 819.50,222.00 819.50,222.00
             819.50,222.00 807.00,190.00 807.00,190.00
             807.00,190.00 750.50,179.50 750.50,179.50
             750.50,179.50 713.50,200.50 713.50,200.50
             713.50,200.50 679.00,216.00 679.00,216.00
             679.00,216.00 650.00,230.00 650.00,230.00
             650.00,230.00 625.00,257.00 625.00,257.00
             625.00,257.00 616.00,286.00 616.00,286.00
             616.00,286.00 605.00,295.00 605.00,295.00
             605.00,295.00 579.50,305.00 579.50,305.00
             579.50,305.00 543.50,303.00 543.50,303.00
             543.50,303.00 521.00,287.50 521.00,287.50
             521.00,287.50 503.00,260.00 503.00,260.00
             503.00,260.00 507.00,230.00 507.50,230.00
             508.00,230.00 522.00,201.00 522.00,201.00
             522.00,201.00 546.00,175.50 546.00,175.50
             546.00,175.50 566.00,155.50 566.00,155.50
             566.00,155.50 592.00,141.00 592.00,141.00
             592.00,141.00 633.50,120.00 633.50,120.00
             633.50,120.00 632.50,110.50 632.50,110.50
             632.50,110.50 617.00,83.50 617.00,83.50
             617.00,83.50 621.00,56.50 621.00,56.50
             621.00,56.50 646.50,32.00 646.50,32.00
             646.50,32.00 666.00,28.50 666.00,28.50
             666.00,28.50 685.00,38.50 685.00,38.50
             685.00,38.50 700.50,57.50 700.50,57.50
             700.50,57.50 699.00,75.00 699.00,75.00
             699.00,75.00 689.00,87.50 689.00,87.50
             689.00,87.50 665.50,103.50 665.50,103.50
             665.50,103.50 661.00,125.50 661.00,125.50
             661.00,125.50 674.00,139.50 674.00,139.50
             674.00,139.50 692.00,131.00 692.00,131.00
             692.00,131.00 702.00,115.50 702.00,115.50
             702.00,115.50 716.00,97.50 716.00,97.50
             716.00,97.50 732.50,89.00 732.50,89.00
             732.50,89.00 754.50,84.00 754.50,84.00
             754.50,84.00 784.50,93.00 784.50,93.00
             784.50,93.00 811.00,112.00 811.00,112.00
             811.00,112.00 811.00,131.50 811.00,131.50
             811.00,131.50 819.50,138.00 819.50,138.00
             819.50,138.00 833.00,140.50 833.00,140.50
             833.00,140.50 844.00,126.00 844.00,126.00
             844.00,126.00 865.50,107.00 865.50,107.00
             865.50,107.00 893.00,109.00 893.00,109.00
             893.00,109.00 888.50,128.00 888.50,128.00
             888.50,128.00 868.00,141.50 868.00,141.50
             868.00,141.50 874.00,158.50 874.00,158.50
             874.00,158.50 886.00,172.50 886.00,172.50
`;
class Controls{
  
  constructor(){
    this.pos = 0;
    this.chatbutton = document.getElementsByClassName('chatbutton')[0];
    this.moveInput = document.getElementsByClassName('controls__move')[0];
    this.container = document.getElementsByClassName('container')[0];
    this.popup = document.getElementsByClassName('popup')[0];
    this.popupCloseButton = document.getElementsByClassName('popup__close')[0];
    this.friendList = document.getElementsByClassName('friendlist__item');
    this.ratingList = document.getElementsByClassName('rating-table__body')[0];
    document.getElementsByClassName('controls__newmail')[0].addEventListener('change',(e)=>this.changechat(e));
    document.getElementsByClassName('controls__move')[0].addEventListener('change',(e)=>this.move(e));
    document.getElementsByClassName('un-button_univer')[0].addEventListener('click',(e)=>this.next());
    document.getElementsByClassName('un-button_top')[0].addEventListener('click',(e)=>this.top());
    this.popupCloseButton.addEventListener('click', (e)=>this.popupClose(e));
    this.popup.addEventListener('transitionend' , (e)=>{
       console.log('animationend');
       if(parseInt(this.popup.style.marginTop)<0){
          
          this.container.classList.remove('container_blured');
      }
    });
   
   this.data(); 
    
 };
 data = (e)=>{
    const rating = data.rating.sort((a,b)=>b.points -a.points);
    
    const idx = {};
    rating.forEach(v=>idx[v.id]=v);
    for(let i in data.friends){
      let im = new Image();
      im.src=data.friends[i].img;
      im.style.width="100%";
      im.setAttribute('title', data.friends[i].name + ' '+data.friends[i].lastName )
      this.friendList[i].appendChild(im);
      if(idx[data.friends[i].id]){
       this.friendList[i].classList.add('friendlist__item_top');
       idx[data.friends[i].id].friend = true;
      }
    }

    for(let i in rating){
        let r = rating[i];
        let row = this.ratingList.insertRow(-1);
        let place = row.insertCell(0);
        let ava = row.insertCell(1);
        let fio = row.insertCell(2);
        let exp = row.insertCell(3);
        
        row.classList.add('rating-table__tr');
        if(idx[r.id].friend){
          row.classList.add('rating-table__tr_friend');
        }
        place.classList.add('rating-table__td','rating-table__place-column');
        let placeText = document.createTextNode(parseInt(i)+1);
        place.appendChild(placeText);
        ava.classList.add('rating-table__td','rating-table__ava-column');
        ava.style.backgroundImage=`url(${r.img}`;
        ava.style.backgroundSize='cover';
        fio.classList.add('rating-table__td','rating-table__fio-column');
        let fioText = document.createTextNode(r.name + ' '+r.lastName);
        fio.appendChild(fioText);
        exp.classList.add('rating-table__td','rating-table__exp-column');
        let expText = document.createTextNode(r.points);
        exp.appendChild(expText);
        

        
    }
}
 changechat = (e)=>{
   if(e.target.checked){
     this.chatbutton.classList.add("un-button_chat-new");
   }else{
     this.chatbutton.classList.remove("un-button_chat-new");
   }
 }
 next = ()=>{
    if(this.pos<=21){
      move(this.pos,this.pos+1);
      this.moveInput.value = ++this.pos;
      console.log(this.pos);
    }
 }
 move = (e) =>{
     move(this.pos,e.target.value);
     this.pos = e.target.value;
  }
 top = (e) =>{
     
    this.container.classList.add('container_blured');
    const ph = parseInt(getComputedStyle(this.popup).getPropertyValue('--ph'));
    const cb = this.container.getBoundingClientRect();
    this.popup.style.marginTop = (cb.height - ph)/2 + 'px';
    
   console.log(ph, cb); 
  }

  popupClose = (e) => {

    const ph = parseInt(getComputedStyle(this.popup).getPropertyValue('--ph'));
    this.popup.style.marginTop = (- ph) + 'px';

  }

 

}

function move(k,j){
const pos=[1,4,6,8,10,13,16,17,20,23,28,31,34,37,40,45,48,52,57,60,62,65];
const s = pos[k] ;
const i = pos[j];
console.log(s,i);
mi=document.getElementById('moveIcon');

//mi.dur=i*10/p.length;
mi.setAttribute('dur',Math.max(Math.abs(s-i+1)*1400/p.length, 0.1)+'s');
let d =  p.split('\n');

if(s>i){
  d=d.slice(i-1,s).reverse();
  d=d.map(item=>item.trim().split(' ')).reduce((S,cur)=>S.concat(cur.reverse()),[]);
  d.pop();
  d.pop();
  d[0] = 'M '+d[0] + " C ";   
}else{
  d=d.slice(s-1,i);
  d[0] = 'M '+ d[0].trim().split(' ')[2] +" C ";
}

mi.setAttribute('path',d.join('\n'));
mi.beginElement();
}

class Friendlist {
   
   constructor(){
       this.before = document.getElementsByClassName('friendlist__before')[0];
       this.after = document.getElementsByClassName('friendlist__after')[0];
       this.list = document.getElementsByClassName('friendlist__list')[0];
       this.before.addEventListener('click',(e)=>this.left(e)); 
       this.after.addEventListener('click',(e)=>this.right(e)); 
       this.pos = 0;
   }
   left = (e)=>{
      console.log('left');
      if (this.list.children.length>0 && this.pos + this.list.scrollWidth > this.list.clientWidth + 56){
         this.pos -= 56;
         this.list.children[0].style.marginLeft=this.pos+'px';
      }
   };
   right = (e)=>{
      console.log('right');
      if (this.list.children.length>0 && this.pos<0){
         this.pos += 56;
         this.list.children[0].style.marginLeft=this.pos+'px';
      }
   };
}


var fl = new Friendlist();
new Controls();
