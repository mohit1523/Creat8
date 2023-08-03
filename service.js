let image1 = document.getElementById("image1")
let image2 = document.getElementById("image2")
let image3 = document.getElementById("image3")

let websiteBtn = document.getElementById("website-btn");
let softwareBtn = document.getElementById("software-btn");
let mobileBtn = document.getElementById("mobile-btn");
let consultancyBtn = document.getElementById("consultancy-btn");
let uiuxBtn = document.getElementById("uiux-btn");
let managementBtn = document.getElementById("management-btn");
let digitalBtn = document.getElementById("digital-marketing-btn");
let projectBtn = document.getElementById("project-btn");

let serviceDetail = document.getElementById("service-detail");

// Digital Marketing
digitalBtn.addEventListener("click", () => {


    image1.style.transform = "translateY(20vw)"
    image2.style.left = "-20vw"
    image3.style.right = "-20vw"

    image1.style.opacity = "0"
    image2.style.opacity = "0"
    image3.style.opacity = "0"

    serviceDetail.style.opacity = "0"
    serviceDetail.style.transform = "scaleY(1.3)"

    setTimeout(() => {
        image1.src = "./src/Digital.png"
        image2.src = "./src/Digital.png"
        image3.src = "./src/Digital.png"

        image1.style.transform = "translateY(10vw)"
        image2.style.left = "5vw"
        image3.style.right = "5vw"

        image1.style.opacity = "1"
        image2.style.opacity = "1"
        image3.style.opacity = "1"

        serviceDetail.innerText = "Our digital marketing experts employ data-driven strategies to boost your online presence, attract a wider audience, and drive conversions. We help you leverage social media, SEO, content marketing, and other channels to reach your business objectives."

        serviceDetail.style.opacity = "1"
        serviceDetail.style.transform = "scaleY(1)"

    }, 1100);
})

// Website Development
websiteBtn.addEventListener("click", () => {


    image1.style.transform = "translateY(20vw)"
    image2.style.left = "-20vw"
    image3.style.right = "-20vw"

    image1.style.opacity = "0"
    image2.style.opacity = "0"
    image3.style.opacity = "0"

    serviceDetail.style.opacity = "0"
    serviceDetail.style.transform = "scaleY(1.3)"

    setTimeout(() => {
        image1.src = "./src/WebDevelopment.png"

        image2.src = "./src/WebDevelopment.png"

        image3.src = "./src/WebDevelopment.png"

        image1.style.transform = "translateY(10vw)"
        image2.style.left = "5vw"
        image3.style.right = "5vw"

        image1.style.opacity = "1"
        image2.style.opacity = "1"
        image3.style.opacity = "1"

        serviceDetail.innerText = " Our team of skilled designers and developers work together to create visually stunning and user-friendly websites that are tailored to your unique business needs. We ensure that your online presence is captivating, responsive, and engaging, allowing you to make a lasting impact on your target audience."

        serviceDetail.style.opacity = "1"
        serviceDetail.style.transform = "scaleY(1)"
    }, 1100);
})

// Software Development
softwareBtn.addEventListener("click", () => {


    image1.style.transform = "translateY(20vw)"
    image2.style.left = "-20vw"
    image3.style.right = "-20vw"

    image1.style.opacity = "0"
    image2.style.opacity = "0"
    image3.style.opacity = "0"

    serviceDetail.style.opacity = "0"
    serviceDetail.style.transform = "scaleY(1.3)"

    setTimeout(() => {
        image1.src = "./src/Software.jpg"
        image2.src = "./src/Software.jpg"
        image3.src = "./src/Software.jpg"

        image1.style.transform = "translateY(10vw)"
        image2.style.left = "5vw"
        image3.style.right = "5vw"

        image1.style.opacity = "1"
        image2.style.opacity = "1"
        image3.style.opacity = "1"

        serviceDetail.innerText = " We specialize in crafting custom software solutions that streamline your business operations and elevate productivity. Our development team leverages the latest technologies to build scalable, secure, and efficient software applications that cater to your specific requirements."

        serviceDetail.style.opacity = "1"
        serviceDetail.style.transform = "scaleY(1)"

    }, 1100);
})


// Mobile Development

mobileBtn.addEventListener("click", () => {


    image1.style.transform = "translateY(20vw)"
    image2.style.left = "-20vw"
    image3.style.right = "-20vw"

    image1.style.opacity = "0"
    image2.style.opacity = "0"
    image3.style.opacity = "0"

    serviceDetail.style.opacity = "0"
    serviceDetail.style.transform = "scaleY(1.3)"

    setTimeout(() => {
        image1.src = "./src/Mobile.png"

        image2.src = "./src/Mobile.png"

        image3.src = "./src/Mobile.png"

        image1.style.transform = "translateY(10vw)"
        image2.style.left = "5vw"
        image3.style.right = "5vw"

        image1.style.opacity = "1"
        image2.style.opacity = "1"
        image3.style.opacity = "1"

        serviceDetail.innerText = "With the world going mobile, we help you tap into this vast market by building feature-rich and intuitive mobile applications for various platforms. Whether it's iOS, Android, or cross-platform development, we ensure that your app stands out and delivers exceptional user experiences."

        serviceDetail.style.opacity = "1"
        serviceDetail.style.transform = "scaleY(1)"
    }, 1100);
})


// IT Consutancy
consultancyBtn.addEventListener("click", () => {


    image1.style.transform = "translateY(20vw)"
    image2.style.left = "-20vw"
    image3.style.right = "-20vw"

    image1.style.opacity = "0"
    image2.style.opacity = "0"
    image3.style.opacity = "0"

    serviceDetail.style.opacity = "0"
    serviceDetail.style.transform = "scaleY(1.3)"

    setTimeout(() => {
        image1.src = "./src/IT.png"
        image2.src = "./src/IT.png"
        image3.src = "./src/IT.png"

        image1.style.transform = "translateY(10vw)"
        image2.style.left = "5vw"
        image3.style.right = "5vw"

        image1.style.opacity = "1"
        image2.style.opacity = "1"
        image3.style.opacity = "1"

        serviceDetail.innerText = "Our expert consultants are dedicated to understanding your business goals and challenges. We provide valuable insights and actionable strategies that enable you to make informed decisions about your IT infrastructure, systems, and processes."

        serviceDetail.style.opacity = "1"
        serviceDetail.style.transform = "scaleY(1)"

    }, 1100);
})

// UI UX Design
uiuxBtn.addEventListener("click", () => {


    image1.style.transform = "translateY(20vw)"
    image2.style.left = "-20vw"
    image3.style.right = "-20vw"

    image1.style.opacity = "0"
    image2.style.opacity = "0"
    image3.style.opacity = "0"

    serviceDetail.style.opacity = "0"
    serviceDetail.style.transform = "scaleY(1.3)"

    setTimeout(() => {
        image1.src = "./src/UIUX.png"
        image2.src = "./src/UIUX.png"
        image3.src = "./src/UIUX.png"
        image1.style.transform = "translateY(10vw)"
        image2.style.left = "5vw"
        image3.style.right = "5vw"

        image1.style.opacity = "1"
        image2.style.opacity = "1"
        image3.style.opacity = "1"

        serviceDetail.innerText = "We believe that user experience is key to success in the digital realm. Our talented designers craft visually appealing and intuitive user interfaces, ensuring that every interaction with your digital products is delightful and seamless."

        serviceDetail.style.opacity = "1"
        serviceDetail.style.transform = "scaleY(1)"

    }, 1100);
})
// Management System
managementBtn.addEventListener("click", () => {


    image1.style.transform = "translateY(20vw)"
    image2.style.left = "-20vw"
    image3.style.right = "-20vw"

    image1.style.opacity = "0"
    image2.style.opacity = "0"
    image3.style.opacity = "0"

    serviceDetail.style.opacity = "0"
    serviceDetail.style.transform = "scaleY(1.3)"

    setTimeout(() => {
        image1.src = "./src/Management.jpg"
        image2.src = "./src/Management.jpg"
        image3.src = "./src/Management.jpg"

        image1.style.transform = "translateY(10vw)"
        image2.style.left = "5vw"
        image3.style.right = "5vw"

        image1.style.opacity = "1"
        image2.style.opacity = "1"
        image3.style.opacity = "1"

        serviceDetail.innerText = "We offer comprehensive solutions for efficient management of your business operations. From ERP systems to CRM platforms, we implement tailored management systems that optimize processes, enhance collaboration, and drive growth."

        serviceDetail.style.opacity = "1"
        serviceDetail.style.transform = "scaleY(1)"

    }, 1100);
})

// Project Management
projectBtn.addEventListener("click", () => {


    image1.style.transform = "translateY(20vw)"
    image2.style.left = "-20vw"
    image3.style.right = "-20vw"

    image1.style.opacity = "0"
    image2.style.opacity = "0"
    image3.style.opacity = "0"

    serviceDetail.style.opacity = "0"
    serviceDetail.style.transform = "scaleY(1.3)"

    setTimeout(() => {
        image1.src = "./src/Project.jpg"
        image2.src = "./src/Project.jpg"
        image3.src = "./src/Project.jpg"

        image1.style.transform = "translateY(10vw)"
        image2.style.left = "5vw"
        image3.style.right = "5vw"

        image1.style.opacity = "1"
        image2.style.opacity = "1"
        image3.style.opacity = "1"

        serviceDetail.innerText = "At Creat8, we take your project ideas from concept to reality. Our experienced team follows industry best practices, adheres to deadlines, and ensures successful project completion while maintaining the highest quality standards."

        serviceDetail.style.opacity = "1"
        serviceDetail.style.transform = "scaleY(1)"

    }, 1100);
})

