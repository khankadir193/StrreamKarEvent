// const dialog = document.querySelector("dialog");
// const showButton = document.querySelector("dialog + button");
// const closeButton = document.querySelector("dialog button");

// // "Show the dialog" button opens the dialog modally
// showButton.addEventListener("click", () => {
//   dialog.showModal();
// });

// // "Close" button closes the dialog
// closeButton.addEventListener("click", () => {
//   dialog.close();
// });


//second ways
const customDialog = document.getElementById("customDialog");
const showDialogButton = document.getElementById("showDialogButton");

showDialogButton.addEventListener("click", function() {
    console.log('show dialog..')
  customDialog.showModal(); 
});

customDialog.querySelector("button").addEventListener("click", function() {
  customDialog.close();
});

// while click on button should open different section


// function hideTalenttions() {
//     // console.log('this is hide function is calling....');
//     const sections = document.querySelectorAll('.moduleDesign');
//     sections.forEach(section => {
//         section.style.display = 'none';
//     });
// }

// function hideUserSections() {
//     // console.log('this is hide function is calling....');
//     const sections = document.querySelectorAll('.userAction');
//     sections.forEach(section => {
//         section.style.display = 'none';
//     });
// }


// document.getElementById('user').addEventListener('click',function (){
//     hideTalenttions();
//     document.getElementById('userSection').style.display = 'block';
// });

// document.getElementById('talent').addEventListener('click',function (){
//     hideUserSections();
//     document.getElementById('section').style.display = 'block';
// })


//while click on selected button in that case button color has to be change...

// function selectedTalentBtn() {
//     // console.log('this is hide function is calling....');
//     const userBtn = document.querySelectorAll('.userTalent');
//     console.log('userBtn000000...',userBtn);

//     userBtn.forEach(btn => {
//         console.log('btn..????',btn.id);
//         btn.style.display = 'none';
//     });

//     return userBtn;
// }

// function hideUserSections() {
//     // console.log('this is hide function is calling....');
//     const sections = document.querySelectorAll('.userAction');
//     sections.forEach(section => {
//         section.style.display = 'none';
//     });
// }


// document.getElementById('talentUnselected').addEventListener('click',function (){
//     const result = selectedTalentBtn();
//     console.log('result...',result);

//     result.forEach((item)=>{
//         if(item.id === "first"){
//             item.style.display = 'block';
//         }else{
//             item.style.display = 'block';
//         }
//     })
//     // document.getElementById('talent').style.display = 'block';
//     // document.getElementById('user').style.display = 'block';
// });

// document.getElementById('user').addEventListener('click',function (){
//     selectedTalentBtn();
//     document.getElementById('userSelectd').style.display = 'block';
//     document.getElementById('talentUnselected').style.display = 'block';
// });






//based on classList..

    const tabs = document.querySelectorAll(".tab1");
    const content=document.querySelectorAll(".talentContent");

    tabs.forEach((tab,tabIndex)=>{
        tab.addEventListener('click',()=>{            
            tabs.forEach((t) => {
                t.classList.remove('active');
            });

            content.forEach((con,contentIndex)=>{
                if(tabIndex===0 && contentIndex === 1){
                    con.style.display = 'block'
                }else if(tabIndex===1 && contentIndex !== 1){
                    con.style.display = 'block'
                }
                else{
                    con.style.display = 'none'
                }
            });

            tab.classList.add('active');
        })
    });



