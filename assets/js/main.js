// preloader and refresh start
const preloader = document.getElementById('preloader');
if(preloader){
    window.addEventListener("load", (()=>{
        preloader.style.display = "none";
    }));
}

// navbar start
const navLinks = document.querySelectorAll("nav div div ul li a");
if(navLinks){
    const currentPath = window.location.pathname.replace(/^\//, "").toLowerCase();

    navLinks.forEach(link => {
        const href = link.getAttribute("href").toLocaleLowerCase(); 

        if(href.endsWith(".html")){
            let modifiedHref = href.replace(".html", ""); 

            if(href === currentPath || currentPath.includes(modifiedHref)){
                link.classList.add("active");
            }
        }
    });
}
// navbar end


// index file start
let counters = document.querySelectorAll('.counter');
if(counters){
    let time = 550;

    counters.forEach((counters)=>{
        let startValue = 0 ;
        let endValue = parseInt(counters.getAttribute('data-target'));
        let duration = Math.floor(time / endValue);
        let countered = setInterval(()=>{
            startValue += 1;
            counters.textContent = startValue;
            if(startValue == endValue){
                clearInterval(countered);
            }
        }, duration);
    });
}
// index file start


// authentication start
const number = document.querySelector('.login_number');
const submit_btn = document.querySelector('.submit-btn');
if(number){
    number.addEventListener("input", function () {
        const inputValue = number.value;
       
        if(inputValue.length == 11 && inputValue.charAt(0) == 0 && inputValue.charAt(1) == 1){
            submit_btn.disabled = false;
        }
        else{
            submit_btn.disabled = true;
        }
    });
}

const password_hide = document.querySelector('.fa-eye-slash');
const Password = document.getElementById('password');
if(password_hide){
    password_hide.addEventListener("click", (() =>{
        if(Password.type == 'password'){
            Password.type = 'text';
            password_hide.classList.replace('fa-eye-slash', 'fa-eye');
        }
        else if(Password.type == 'text'){
            Password.type = 'password';
            password_hide.classList.replace('fa-eye', 'fa-eye-slash');
        };
    }))
}


const back_btn = document.querySelector(".back_btn");
if(back_btn){ 
    back_btn.addEventListener("click", (()=>{
        window.history.back();
    }))
}

const input_file_btn = document.querySelector('.input_file_btn');
const input_file = document.querySelector('.input_file');
if(input_file_btn){
    input_file_btn.addEventListener("click", (()=>{
        input_file.click();
    }));
}
// authentication end

// footer start
const Year = document.getElementById('Year');
if(Year){
    const date = new Date();
    const year = date.getFullYear();

    Year.innerText = year;
}
// footer end


// common classes (OnClick hide/show) start
function AddClassFunc(ElemSelector1, ElemSelector2, ClassToggle, operation){
    const element1 = document.querySelector(ElemSelector1);
    const element2 = document.querySelector(ElemSelector2);

    if(element1 && element2){
        element1.addEventListener("click", (()=>{
            if(operation == "add"){
                element2.classList.add(ClassToggle);
            }
            else if(operation == "remove"){
                element2.classList.remove(ClassToggle);
            }
            else{
                console.log("Invalid operation");
            }
        }));
    }
    else{
        console.log('Class is not found');
    }
}

// bar button
AddClassFunc(".bar_btn", ".responsive-navbar", "active_section", "add");
AddClassFunc(".Cross-Mark", ".responsive-navbar", "active_section", "remove");
// common classes (OnClick hide/show) end



// tab functionality
const buttons = document.querySelectorAll('.buttons');
const contents = document.querySelectorAll('.contents')
if(buttons){
    buttons.forEach((btns, index) =>{
        btns.addEventListener("click", (() =>{
            // class remove
            contents.forEach((content) =>{
                content.classList.remove('active_section');
            });
            buttons.forEach((btn) =>{
                btn.classList.remove('active-btn');
            });
            // class remove

            // class add
            contents[index].classList.add('active_section');
            buttons[index].classList.add('active-btn');
            // class add
        }));
    });
};




// blog page start
const blog_card = document.querySelectorAll('.blog-card')
if(blog_card){
    blog_card.forEach((card) =>{
        let btn = card.querySelector(".see-more-btn");
        let paragraph = card.querySelector(".blog_paragraph");

        let text = paragraph.textContent;

        paragraph.textContent = text.slice(0, 100) + "...";

        btn.addEventListener("click", (()=>{
            card.classList.toggle("active_card");

            if(card.classList.contains("active_card")){
                btn.textContent = "See Less";
                paragraph.textContent = text;
            }
            else{
                btn.textContent = "See More";
                paragraph.textContent = text.slice(0, 100) + "...";
            }
        }));
    });
}
// blog page start