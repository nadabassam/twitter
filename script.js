//DOM Element

const mainPage = document.querySelector('.main-page');
const loginPage = document.querySelector('.login-page');
const middleContent = document.querySelector('.middle-content');
const newsFeedPage = document.querySelector('.feeds-page');
const loginModel = document.querySelector('.login-model');
const modelX = document.querySelector('.login-model i');
const loginFormBtn = document.querySelector('.login-form-btn');
const postBtn = document.querySelector('.post-btn');
const modalWrapper = document.querySelector('.modal-wrapper');
const modal = document.querySelector('.modal');
const postModelX = document.querySelector('.modal-header i ');
const modelPostBtn = document.querySelector('.modal-header button');
const modelFooterPlus = document.querySelector('.modal-footer span');
const modelInput = document.querySelector('.modal-input');
const user = document.querySelector('.user');
const sidebar = document.querySelector('.sidebar');
const sidebarWrapper = document.querySelector('.sidebar-wrapper');
const XBtn = document.querySelector('.sidebar-header i')





//Main page
const goToLoginPage = () => {
    mainPage.style.display = 'none';
    loginPage.style.display = 'grid';
};

middleContent.addEventListener('click', e => {
    goToLoginPage();
});

//Login page
modelX.addEventListener('click', () => {
    loginModel.style.display = 'none';
});


loginFormBtn.addEventListener('click', () => {
    const loginUserInfo = document.querySelector('.login-user-info');
    const loginPassword = document.querySelector('.login-password');
    if (loginUserInfo.value !== "" && loginPassword.value !== "") {
        loginPage.style.display = 'none';
        newsFeedPage.style.display = 'block';
    } else {
        loginModel.style.display = 'block';
    }
});


// News feed page
//post model
postBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    modalWrapper.classList.add('modal-wrapper-display');
});


const chanfeOpacity = (x) => {
    modelPostBtn.style.opacity = x;
    modelFooterPlus.style.opacity = x;
}


postModelX.addEventListener('click', () => {
    modal.style.display = 'none';
    modalWrapper.classList.remove('modal-wrapper-display');

    if (modelInput.value !== "") {
        modelInput.value = "";
        chanfeOpacity(0.5);
    }

});

//بتعمل شفافية بحالة كتبت
modelInput.addEventListener('keypress', (e) => {
    if (e.target.value !== "") {
        chanfeOpacity(1);
    }
});

//بترجع الشفافية بحالة ضغطت برا
modelInput.addEventListener('blur', (e) => {
    if (e.target.value === '') {
        chanfeOpacity(0.5);
    }
})

//Sidebar
user.addEventListener('click', () => {
    sidebar.classList.add('sidebar-display');
    sidebarWrapper.classList.add('sidebar-wrapper-display');


});

XBtn.addEventListener('click', () => {
    sidebar.classList.remove('sidebar-display');
    sidebarWrapper.classList.remove('sidebar-wrapper-display');
});
