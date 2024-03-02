// for slier 
// btn Reference
const slideRightBtn = document.getElementById("slide-right-btn")
const sldieLeftBtn = document.getElementById("slide-left-btn")
// slide div Reference
const slide = document.getElementById("slide")
// for div lent 
const totalSlideNumber = document.querySelectorAll('.SliderChaild').length
// for show all diiv and current div  Reference
const sliderCounShow = document.getElementById("slider_Count")
const sliderTotal = document.getElementById("total_slide")
// set slider div width by his item number 
slide.style.width =`${totalSlideNumber * 100}%`
// show slider total div numberr 
sliderTotal.innerHTML = totalSlideNumber

// for set slide with by his sivling number 
document.querySelectorAll('.SliderChaild').forEach((x)=>{
    let totalSlideWidth = 100

    let calCulateWith = totalSlideWidth / totalSlideNumber
    x.style.width = `${calCulateWith}%`
})

let CounterSlide = 1

function updateSlideCounter(){ sliderCounShow.innerHTML = CounterSlide}
updateSlideCounter()

// margin function 
function RightBtnMargin(){ slide.style.marginLeft = `-${CounterSlide * 100}%`}
function LeftBtnMargin(){slide.style.marginLeft = `-${(CounterSlide - 1) * 100}%`}

// right button 
slideRightBtn.addEventListener('click',(x)=>{
  if(CounterSlide < totalSlideNumber){
    RightBtnMargin()
    CounterSlide +=1
    updateSlideCounter()
  }else{
      CounterSlide = 0
      RightBtnMargin()
      CounterSlide += 1
    updateSlideCounter()
  }
})

// left button 
sldieLeftBtn.addEventListener('click',(x)=>{
    if(CounterSlide > 1){
        CounterSlide -= 1
        LeftBtnMargin()
        updateSlideCounter()
      }else{  
        CounterSlide = totalSlideNumber
        LeftBtnMargin()
        updateSlideCounter()
      }
})

// for change game catagoris 

function Catgori_Change(x){



  const catagorisParent = document.getElementById('catagorisContentParent')

  
if(x == 'slotId' ){

  const Cur_catagoris = document.getElementById(x)
  document.getElementById('CasinoId').classList.remove('SideAfter')
  Cur_catagoris.classList.add('SideAfter')


  catagorisParent.innerHTML = `
  
  <button onclick="StartGame('UnderOverSeven')" id="UnderOverSeven" class="grid place-content-center"><img src="./img/underOverSeven.png" alt=""></button>
  <button onclick="StartGame('headtail')" id="headtail" class="grid place-content-center relative SideAfter overflow-hidden"><img src="./img/headOrtail.png" alt=""></button>
  
  `
}

// casino 
if(x == 'CasinoId' ){

  const Cur_catagoris = document.getElementById(x)
  document.getElementById('slotId').classList.remove('SideAfter')
  Cur_catagoris.classList.add('SideAfter')
  catagorisParent.innerHTML = `
  
  <button onclick="StartGame('Rullete')" id="Rullete" class="grid place-content-center"><img src="./img/rullete.png" alt=""></button>
<button onclick="StartGame('Sicbo')" id="Sicbo" class="grid place-content-center relative SideAfter overflow-hidden"><img src="./img/sicbo.png" alt=""></button>
  
  `
}
}

Catgori_Change("slotId")

// help btn movement funtion here 

// for wondow mouse event 
const helpChatSection = document.getElementById('Customer_chat_btn')
const StartDraging = (x)=>{

  let FixX = x.clientX - helpChatSection.getBoundingClientRect().left
  let FixY = x.clientY - helpChatSection.getBoundingClientRect().top

 const  DragHandler = (y)=>{
  let NewX = y.clientX - FixX;
  let NewY = y.clientY - FixY;
  helpChatSection.style.top =`${NewY}px`
  helpChatSection.style.left =`${NewX}px`
 }

document.addEventListener('mousemove',DragHandler)
const StopMouseDrag = (x)=>{
  document.removeEventListener('mousemove',DragHandler)
}
document.addEventListener('mouseup',StopMouseDrag)
}
helpChatSection.addEventListener('mousedown',StartDraging)

// for mobile divices 

const StartDragingMob = (event)=>{
  let FixX =event.touches[0].clientX - helpChatSection.getBoundingClientRect().left
  let FixY =event.touches[0].clientY - helpChatSection.getBoundingClientRect().top
  
  const MobileDrag = (xy)=>{

    let NewX = xy.touches[0].clientX - FixX;
    let NewY = xy.touches[0].clientY - FixY;

    helpChatSection.style.top =`${NewY}px`
    helpChatSection.style.left =`${NewX}px`
  }
  const mobileDragEnd = ()=>{
    document.removeEventListener('touchmove',MobileDrag)
  }
  document.addEventListener('touchmove',MobileDrag)
  document.addEventListener('touchend',mobileDragEnd)
}



helpChatSection.addEventListener('touchstart',StartDragingMob)









