// Product details database for specifications modal
const productDatabase = {
    weeder: {
        title: "Power Weeder",
        category: "Weeding Tools",
        tag: "weeding",
        desc: "Designed for intensive weeding operations in row crops, vegetable gardens, and coconut orchards. It features a heavy-duty gearbox and a highly fuel-efficient overhead valve engine.",
        img: "images/media__1781020219377.jpg",
        workingImg: "images/media__1781020177497.jpg",
        specs: {
            "Engine Type": "4-Stroke, Single Cylinder, Air-Cooled Petrol",
            "Power Output": "7.0 HP / 3600 RPM",
            "Working Width": "3.0 Feet (Adjustable to 2.0 Feet)",
            "Working Depth": "3 - 5 Inches",
            "Transmission": "Gear Driven (2 Forward + 1 Reverse)",
            "Fuel Tank Capacity": "3.6 Liters",
            "Weight": "85 kg"
        }
    },
    chaff: {
        title: "Chaff Cutter",
        category: "Crop Processing",
        tag: "processing",
        desc: "Perfect feed processing machinery for dairy farmers. It clean-cuts dry and green crops like straw, sugarcane, and fodder grasses, optimizing digestive intake for cattle.",
        img: "images/media__1781020354393.png",
        workingImg: "images/media__1781020177210.jpg",
        specs: {
            "Motor Power": "2.0 HP, Single Phase, 220V",
            "Production Capacity": "500 - 700 kg/hour",
            "Blades": "3 High-Carbon Hardened Steel Blades",
            "RPM": "1440 RPM",
            "Body Material": "Cast Iron Feed Mouth & Steel Stand",
            "Fodder Cut Length": "10mm to 15mm (Adjustable)"
        }
    },
    petrol_tiller: {
        title: "Petrol Power Tiller",
        category: "Soil Tillage",
        tag: "tillage",
        desc: "Mid-size versatile tiller that strikes a balance between weight and power. Ideal for dry soil weeding, vegetable farming, and soil aeration.",
        img: "images/media__1781020233508.png",
        workingImg: "images/media__1781020177175.jpg",
        specs: {
            "Engine Type": "Single-Cylinder Petrol Engine (OHV)",
            "Power Output": "9.0 HP",
            "Cultivating Width": "4.0 Feet",
            "Tilling Depth": "4 - 6 Inches",
            "Gears": "2 Forward + 1 Reverse",
            "Fuel Tank": "4.0 Liters",
            "Fuel consumption": "0.7 - 0.9 L/hr"
        }
    },
    diesel_tiller: {
        title: "Diesel Power Tiller",
        category: "Soil Tillage",
        tag: "tillage",
        desc: "Premium grade heavy diesel cultivator for continuous farm preparation. Highly durable gears engineered for rough soil and rocky terrains.",
        img: "https://5.imimg.com/data5/SELLER/Default/2021/8/AA/SP/GR/2366493/sharp-garuda-diesel-power-tiller.png",
        workingImg: "images/media__1781020177143.jpg",
        specs: {
            "Engine Type": "Vertical 4-stroke, Air-cooled Diesel",
            "Power Output": "15.0 HP",
            "Gear System": "6 Forward + 2 Reverse Gears",
            "Tilling Width": "4.5 Feet",
            "Tractor weight": "290 kg",
            "Starting": "Electric Key Start",
            "Cooling": "Water-Cooling radiator"
        }
    },
    sprayer: {
        title: "Battery Sprayer",
        category: "Spraying",
        tag: "spraying",
        desc: "Ergonomic backpack electric sprayer for garden and crop pest control. Smooth constant pressure output enables efficient spraying of pesticides and fertilizers.",
        img: "images/media__1781020364807.png",
        workingImg: "https://images.unsplash.com/photo-1592890288564-76628a30a657?auto=format&fit=crop&q=80&w=600",
        specs: {
            "Battery Type": "12V 8Ah Lead-Acid Rechargeable",
            "Tank Capacity": "16 Liters",
            "Charger": "Smart Auto-Cut Charger",
            "Spray Wand": "Stainless steel telescopic rod",
            "Working Pressure": "0.2 - 0.45 Mpa",
            "Battery Autonomy": "Up to 15-20 full tanks per charge"
        }
    },
    rotavator: {
        title: "Rotavator Attachment",
        category: "Soil Tillage",
        tag: "tillage",
        desc: "Heavy-duty rotavator implement that attaches to 3-point tractor hitches. It pulverizes soil clumps and blends crop residue, preparing nursery beds in one single pass.",
        img: "images/media__1781020260309.png",
        workingImg: "images/media__1781020177175.jpg",
        specs: {
            "Tractor Requirement": "40 - 50 HP tractor PTO",
            "Working Width": "6.0 Feet (72 Inches)",
            "Blades": "42 High-Carbon steel L-type blades",
            "Gearbox": "Multi-speed side gear drive",
            "Weight": "320 kg",
            "Safety Shield": "Heavy steel spring-loaded rear flap"
        }
    },
    blade: {
        title: "Rotavator Blade",
        category: "Soil Tillage",
        tag: "tillage",
        desc: "Replacement L-type rotavator blades forged from premium spring-steel alloy. Double heat-treated to resist chipping, fracturing, and wear against abrasive sand and rocks.",
        img: "images/media__1781020247891.png",
        workingImg: "images/media__1781020376160.png",
        specs: {
            "Material": "Heavy-Duty Silicon-Manganese Spring Steel",
            "Hardness": "50 - 52 HRC (Heat Treated)",
            "Fitting Hole": "12mm Diameter holes",
            "Type": "Standard Left and Right Hand L-Type",
            "Blade Thickness": "7mm"
        }
    }
};

document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. THEME SWITCHER LOGIC ---
    const themeToggle = document.getElementById("theme-toggle");
    const currentTheme = localStorage.getItem("theme") || "light";
    
    document.documentElement.setAttribute("data-theme", currentTheme);
    
    themeToggle.addEventListener("click", () => {
        let theme = document.documentElement.getAttribute("data-theme");
        let newTheme = theme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    });

    // --- 2. MOBILE MENU NAVBAR LOGIC ---
    const hamburger = document.getElementById("hamburger-menu");
    const navLinks = document.getElementById("nav-links");
    const navLinksList = document.querySelectorAll("nav a");
    
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        const isOpened = navLinks.classList.contains("active");
        hamburger.innerHTML = isOpened ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    
    // Close mobile nav when link is clicked
    navLinksList.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });

    // --- 3. SCROLL EFFECTS & SCROLLSPY ---
    const header = document.querySelector("header");
    const scrollTopBtn = document.getElementById("scroll-to-top");
    const scrollDown = document.getElementById("scroll-down");
    const sections = document.querySelectorAll("section");
    
    window.addEventListener("scroll", () => {
        // Sticky Header glass effect styling
        if (window.scrollY > 40) {
            header.style.boxShadow = "var(--card-shadow)";
            scrollTopBtn.classList.add("active");
        } else {
            header.style.boxShadow = "var(--header-shadow)";
            scrollTopBtn.classList.remove("active");
        }
        
        // ScrollSpy nav link highlighters
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });
        
        navLinksList.forEach(a => {
            a.classList.remove("active");
            if (a.getAttribute("href") === `#${current}`) {
                a.classList.add("active");
            }
        });
    });
    
    // Scroll down CTA in Hero
    if (scrollDown) {
        scrollDown.addEventListener("click", () => {
            document.getElementById("about").scrollIntoView({ behavior: "smooth" });
        });
    }
    
    // Scroll to Top action
    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // --- 4. CATALOG SEARCH & TAG FILTER LOGIC ---
    const searchInput = document.getElementById("product-search");
    const filterTags = document.querySelectorAll(".filter-tag");
    const productCards = document.querySelectorAll("#product-catalog .card");
    
    const filterProducts = () => {
        const query = searchInput.value.toLowerCase().trim();
        const activeCategory = document.querySelector(".filter-tag.active").getAttribute("data-category");
        
        productCards.forEach(card => {
            const searchData = card.getAttribute("data-search").toLowerCase();
            const cardCategory = card.getAttribute("data-category");
            
            const matchesSearch = query === "" || searchData.includes(query);
            const matchesCategory = activeCategory === "all" || cardCategory === activeCategory;
            
            if (matchesSearch && matchesCategory) {
                card.style.display = "flex";
                // Quick micro-animation trigger
                card.style.animation = "fadeInUp 0.4s forwards";
            } else {
                card.style.display = "none";
            }
        });
    };
    
    searchInput.addEventListener("input", filterProducts);
    
    filterTags.forEach(tag => {
        tag.addEventListener("click", () => {
            filterTags.forEach(t => t.classList.remove("active"));
            tag.classList.add("active");
            filterProducts();
        });
    });

    // --- 5. TESTIMONIAL CAROUSEL SLIDER ---
    const track = document.getElementById("testimonial-track");
    const dotsContainer = document.getElementById("carousel-dots");
    const slides = Array.from(track.children);
    let slideIndex = 0;
    let slideInterval;
    
    // Create dots dynamically based on number of slides
    slides.forEach((slide, index) => {
        const dot = document.createElement("button");
        dot.classList.add("carousel-dot");
        if (index === 0) dot.classList.add("active");
        dot.addEventListener("click", () => {
            goToSlide(index);
            resetInterval();
        });
        dotsContainer.appendChild(dot);
    });
    
    const dots = Array.from(dotsContainer.children);
    
    const goToSlide = (index) => {
        slideIndex = index;
        track.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach(d => d.classList.remove("active"));
        dots[index].classList.add("active");
    };
    
    const startAutoplay = () => {
        slideInterval = setInterval(() => {
            slideIndex = (slideIndex + 1) % slides.length;
            goToSlide(slideIndex);
        }, 6000);
    };
    
    const resetInterval = () => {
        clearInterval(slideInterval);
        startAutoplay();
    };
    
    startAutoplay();

    // --- 6. FAQ ACCORDION DROPDOWNS ---
    const faqQuestions = document.querySelectorAll(".faq-question");
    
    faqQuestions.forEach(question => {
        question.addEventListener("click", () => {
            const item = question.parentElement;
            const answer = question.nextElementSibling;
            
            if (item.classList.contains("active")) {
                item.classList.remove("active");
                answer.style.maxHeight = null;
            } else {
                // Close other opened FAQs
                document.querySelectorAll(".faq-item").forEach(i => {
                    i.classList.remove("active");
                    i.querySelector(".faq-answer").style.maxHeight = null;
                });
                
                item.classList.add("active");
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });

    // --- 7. INQUIRY LOCAL DATABASE & DRAWER LOGIC ---
    const inquiryDrawer = document.getElementById("inquiry-drawer");
    const inquiryBtn = document.getElementById("inquiry-drawer-btn");
    const inquiryClose = document.getElementById("inquiry-drawer-close");
    const inquiryCount = document.getElementById("inquiry-count");
    const inquiryListContainer = document.getElementById("inquiry-list-container");
    
    const loadInquiries = () => {
        const inquiries = JSON.parse(localStorage.getItem("inquiries")) || [];
        inquiryCount.textContent = inquiries.length;
        
        if (inquiries.length === 0) {
            inquiryListContainer.innerHTML = '<div class="inquiry-empty">No inquiries made yet in this browser session.</div>';
            return;
        }
        
        inquiryListContainer.innerHTML = inquiries.reverse().map(inq => `
            <div class="inquiry-item">
                <div class="inquiry-item-header">
                    <span class="inquiry-item-product">${escapeHtml(inq.product)}</span>
                    <span class="inquiry-item-date">${escapeHtml(inq.date)}</span>
                </div>
                <div class="inquiry-item-details">
                    <p><strong>Name:</strong> ${escapeHtml(inq.name)}</p>
                    <p><strong>Phone:</strong> ${escapeHtml(inq.phone)}</p>
                    <p><strong>Message:</strong> "${escapeHtml(inq.message)}"</p>
                </div>
            </div>
        `).join('');
    };
    
    const saveInquiry = (name, phone, email, product, message) => {
        const inquiries = JSON.parse(localStorage.getItem("inquiries")) || [];
        const dateObj = new Date();
        const dateStr = dateObj.toLocaleDateString('en-IN', {day: 'numeric', month: 'short', year: 'numeric'});
        
        inquiries.push({ name, phone, email, product, message, date: dateStr });
        localStorage.setItem("inquiries", JSON.stringify(inquiries));
        loadInquiries();
    };
    
    const escapeHtml = (text) => {
        const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
        return text ? text.replace(/[&<>"']/g, m => map[m]) : '';
    };
    
    inquiryBtn.addEventListener("click", () => {
        inquiryDrawer.classList.toggle("active");
    });
    
    inquiryClose.addEventListener("click", () => {
        inquiryDrawer.classList.remove("active");
    });
    
    // Initial Load of logs
    loadInquiries();

    // --- 8. DIRECT CONTACT FORM HANDLER (Sends via WhatsApp Link) ---
    const directContactForm = document.getElementById("direct-contact-form");
    directContactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("contact-name").value;
        const phone = document.getElementById("contact-phone").value;
        const msg = document.getElementById("contact-msg").value;
        
        // Log locally
        saveInquiry(name, phone, "N/A", "Direct Message", msg);
        
        // Build WhatsApp Link
        const formattedMsg = `Hi Star Bright Agency,\n\nI am *${name}* (Phone: ${phone}).\nI want to contact you.\n\n*My Message:*\n"${msg}"`;
        const whatsappUrl = `https://wa.me/919894534357?text=${encodeURIComponent(formattedMsg)}`;
        
        // Reset form & open Whatsapp link
        directContactForm.reset();
        window.open(whatsappUrl, "_blank");
    });

    // --- 9. QUOTE MODAL FORM SUBMIT HANDLER ---
    const quoteForm = document.getElementById("quote-request-form");
    quoteForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const name = document.getElementById("quote-name").value;
        const phone = document.getElementById("quote-phone").value;
        const email = document.getElementById("quote-email").value || "N/A";
        const product = document.getElementById("quote-product").value;
        const msg = document.getElementById("quote-msg").value;
        
        // Log in simulated local database
        saveInquiry(name, phone, email, product, msg);
        
        // Build Whatsapp Redirect Link
        const text = `Hi Star Bright Agency,\n\nI'm *${name}*.\n*WhatsApp:* ${phone}\n*Email:* ${email}\n\nI want to request a price quote for:\n*${product}*\n\n*Requirements:*\n"${msg}"`;
        const whatsappUrl = `https://wa.me/919894534357?text=${encodeURIComponent(text)}`;
        
        // Reset form, close Modal and redirect
        quoteForm.reset();
        closeQuoteModal();
        window.open(whatsappUrl, "_blank");
    });
});

// --- 10. PRODUCT SPECIFICATIONS MODAL FUNCTIONS ---
const specsModal = document.getElementById("specs-modal");
const modalImgHolder = document.getElementById("modal-img-holder");
const modalTag = document.getElementById("modal-tag");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalSpecsTable = document.getElementById("modal-specs-table");
const modalQuoteBtn = document.getElementById("modal-quote-btn");
const toggleContainer = document.getElementById("visuals-toggle-container");
const btnProductShot = document.getElementById("btn-product-shot");
const btnWorkingShot = document.getElementById("btn-working-shot");

let activeProductKey = "";

window.viewSpecs = function(productKey) {
    const data = productDatabase[productKey];
    if (!data) return;
    
    activeProductKey = productKey;
    
    // Reset toggle tabs
    btnProductShot.classList.add("active");
    btnWorkingShot.classList.remove("active");
    
    // Check if working image exists
    if (data.workingImg) {
        toggleContainer.style.display = "flex";
    } else {
        toggleContainer.style.display = "none";
    }
    
    // Set product image
    modalImgHolder.innerHTML = `<img src="${data.img}" alt="${data.title}">`;
    
    modalTag.textContent = data.category;
    modalTitle.textContent = data.title;
    modalDesc.textContent = data.desc;
    
    // Build specs table rows
    modalSpecsTable.innerHTML = Object.entries(data.specs).map(([name, val]) => `
        <tr>
            <td class="spec-name">${escapeHtmlText(name)}</td>
            <td class="spec-val">${escapeHtmlText(val)}</td>
        </tr>
    `).join('');
    
    // Configure modal Request CTA link
    modalQuoteBtn.onclick = () => {
        closeSpecsModal();
        openQuoteModal(data.title);
    };
    
    specsModal.classList.add("active");
};

window.toggleModalVisual = function(type) {
    const data = productDatabase[activeProductKey];
    if (!data) return;
    
    if (type === 'product') {
        btnProductShot.classList.add("active");
        btnWorkingShot.classList.remove("active");
        modalImgHolder.innerHTML = `<img src="${data.img}" alt="${data.title}">`;
    } else if (type === 'working' && data.workingImg) {
        btnProductShot.classList.remove("active");
        btnWorkingShot.classList.add("active");
        modalImgHolder.innerHTML = `<img src="${data.workingImg}" alt="${data.title} in action">`;
    }
};

window.closeSpecsModal = function() {
    specsModal.classList.remove("active");
};

// --- 11. QUOTE REQUEST MODAL ACTIONS ---
const quoteModal = document.getElementById("quote-modal");
const selectProduct = document.getElementById("quote-product");

window.openQuoteModal = function(productName = "General Inquiry") {
    // Select the correct product option
    for (let i = 0; i < selectProduct.options.length; i++) {
        if (selectProduct.options[i].value === productName || selectProduct.options[i].text.includes(productName)) {
            selectProduct.selectedIndex = i;
            break;
        }
    }
    quoteModal.classList.add("active");
};

window.closeQuoteModal = function() {
    quoteModal.classList.remove("active");
};

// Simple utility to escape text in dynamically created modal content
function escapeHtmlText(text) {
    const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
    return text ? text.replace(/[&<>"']/g, m => map[m]) : '';
}

// Close modals on clicking background overlay
window.addEventListener("click", (e) => {
    if (e.target === specsModal) closeSpecsModal();
    if (e.target === quoteModal) closeQuoteModal();
});