

async function foodieApp() {

    try {

        // BASIC VARIABLES

        const app = document.getElementById("app");

        let foods = [];
        let currentFood = null;
        let currentQuantity = 1;

        // FETCH FOOD DATA

        const response = await fetch(
            "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian"
        );


        if (!response) {

            throw new Error("API request failed");

        }


        const data = await response.json();
        // console.log(data)

        foods = data.meals || [];

        // REGISTER PAGE

        function showRegister() {

            app.innerHTML = `

                <div class="row justify-content-center">

                    <div class="col-12 col-sm-10 col-md-7 col-lg-5">

                        <div class="card shadow-sm border-0 mt-4">

                            <div class="card-body p-4 p-md-5">


                                <div class="text-center mb-4">

                                    <div class="fs-1">
                                        <img src="./images/logo1.jfif" class="rounded-circle" alt="logo" height="50px" width="50px">
                                    </div>

                                    <h2 class="fw-bold text-success">
                                        Create Account
                                    </h2>

                                    <p class="text-secondary">
                                        Register to order delicious
                                        vegetarian food
                                    </p>

                                </div>


                                <form id="registerForm">


                                    <!-- NAME -->

                                    <div class="mb-3">

                                        <label
                                            for="registerName"
                                            class="form-label fw-semibold"
                                        >
                                            Full Name
                                        </label>

                                        <input
                                            type="text"
                                            id="registerName"
                                            class="form-control"
                                            placeholder="Enter your name"
                                            required
                                        >

                                    </div>


                                    <!-- EMAIL -->

                                    <div class="mb-3">

                                        <label
                                            for="registerEmail"
                                            class="form-label fw-semibold"
                                        >
                                            Email
                                        </label>

                                        <input
                                            type="email"
                                            id="registerEmail"
                                            class="form-control"
                                            placeholder="Enter your email"
                                            required
                                        >

                                    </div>


                                    <!-- PASSWORD -->

                                    <div class="mb-3">

                                        <label
                                            for="registerPassword"
                                            class="form-label fw-semibold"
                                        >
                                            Password
                                        </label>

                                        <input
                                            type="password"
                                            id="registerPassword"
                                            class="form-control"
                                            placeholder="Enter password"
                                            required
                                        >

                                    </div>


                                    <!-- CONFIRM PASSWORD -->

                                    <div class="mb-4">

                                        <label
                                            for="confirmPassword"
                                            class="form-label fw-semibold"
                                        >
                                            Confirm Password
                                        </label>

                                        <input
                                            type="password"
                                            id="confirmPassword"
                                            class="form-control"
                                            placeholder="Confirm password"
                                            required
                                        >

                                    </div>


                                    <button
                                        type="submit"
                                        class="btn btn-success w-100"
                                    >

                                        Register

                                    </button>


                                </form>


                                <div class="text-center mt-4">

                                    <span class="text-secondary">
                                        Already registered?
                                    </span>

                                    <button
                                        class="btn btn-link text-success fw-bold p-0"
                                        onclick="showLogin()"
                                    >

                                        Please Login

                                    </button>

                                </div>


                            </div>

                        </div>

                    </div>

                </div>

            `;


            document
                .getElementById("registerForm")
                .addEventListener(
                    "submit",
                    registerUser
                );

        }


        // REGISTER USER
        

        function registerUser(event) {

            event.preventDefault();


            const name =document.getElementById("registerName").value.trim();

            const email =
                document
                    .getElementById("registerEmail")
                    .value
                    .trim();

            const password =
                document
                    .getElementById("registerPassword")
                    .value;
                    
            const confirmPassword =
                document
                    .getElementById("confirmPassword")
                    .value;


            if (password !== confirmPassword) {

                alert("Passwords do not match!");

                return;

            }


            const user = {

                name: name,

                email: email,

                password: password

            };


            localStorage.setItem(
                "user",
                JSON.stringify(user)
            );


            alert(
                "Registration successful! Please login."
            );


            showLogin();

        }


        // LOGIN PAGE

        function showLogin() {

            app.innerHTML = `

                <div class="row justify-content-center">

                    <div class="col-12 col-sm-10 col-md-7 col-lg-5">

                        <div class="card shadow-sm border-0 mt-4">

                            <div class="card-body p-4 p-md-5">


                                <div class="text-center mb-4">

                                    <div class="fs-1">
                                        <img src="./images/logo1.jfif" class="rounded-circle" alt="logo" height="50px" width="50px">
                                    </div>

                                    <h2 class="fw-bold text-success">
                                        Welcome Back!
                                    </h2>

                                    <p class="text-secondary">
                                        Login to continue ordering
                                    </p>

                                </div>


                                <form id="loginForm">


                                    <!-- EMAIL -->

                                    <div class="mb-3">

                                        <label
                                            for="loginEmail"
                                            class="form-label fw-semibold"
                                        >
                                            Email
                                        </label>

                                        <input
                                            type="email"
                                            id="loginEmail"
                                            class="form-control"
                                            placeholder="Enter your email"
                                            required
                                        >

                                    </div>


                                    <!-- PASSWORD -->

                                    <div class="mb-4">

                                        <label
                                            for="loginPassword"
                                            class="form-label fw-semibold"
                                        >
                                            Password
                                        </label>

                                        <input
                                            type="password"
                                            id="loginPassword"
                                            class="form-control"
                                            placeholder="Enter your password"
                                            required
                                        >

                                    </div>


                                    <button
                                        type="submit"
                                        class="btn btn-success w-100"
                                    >

                                        Login

                                    </button>


                                </form>


                                <div class="text-center mt-4">

                                    <span class="text-secondary">
                                        New customer?
                                    </span>

                                    <button
                                        class="btn btn-link text-success fw-bold p-0"
                                        onclick="showRegister()"
                                    >

                                        Register

                                    </button>

                                </div>


                            </div>

                        </div>

                    </div>

                </div>

            `;


            document
                .getElementById("loginForm")
                .addEventListener(
                    "submit",
                    loginUser
                );

        }


        // LOGIN USER

        function loginUser(event) {

            event.preventDefault();


            const email =
                document
                    .getElementById("loginEmail")
                    .value
                    .trim();


            const password =
                document
                    .getElementById("loginPassword")
                    .value;


            const savedUser =
                JSON.parse(
                    localStorage.getItem("user")
                );

            // console.log(savedUser)

            if (!savedUser) {

                alert(
                    "No account found. Please register first."
                );

                showRegister();

                return;

            }


            if (
                email === savedUser.email &&
                password === savedUser.password
            ) {

                localStorage.setItem(
                    "isLoggedIn",
                    "true"
                );


                updateProfileName();


                alert(
                    "Login successful! 🎉"
                );


                showHome();

            }

            else {

                alert(
                    "Invalid email or password."
                );

            }

        }


        // LOGIN CHECK

        function checkLogin() {

            return (
                localStorage.getItem(
                    "isLoggedIn"
                ) === "true"
            );

        }

    // console.log(checkLogin())

        // UPDATE CUSTOMER NAME IN NAVBAR

        function updateProfileName() {

            const profileName =
                document.getElementById(
                    "profileName"
                );


            const user =
                JSON.parse(
                    localStorage.getItem("user")
                );


            const loggedIn =
                checkLogin();


            if (
                loggedIn &&
                user &&
                profileName
            ) {

                profileName.textContent =
                    "👤 " + user.name;

            }

            else if (profileName) {

                profileName.textContent =
                    "👤 Profile";

            }

        }

        // HOME PAGE

        function showHome() {

            if (!checkLogin()) {

                showLogin();

                return;

            }


            updateProfileName();


            // app.innerHTML = `

            //     <div class="text-center py-5">

            //         <div class="spinner-border text-success"
            //              role="status">

            //         </div>

            //         <p class="text-secondary mt-3">

            //             <img src="./images/logo1.jfif" class="rounded-circle" alt="logo" height="50px" width="50px"> 
            //             Loading vegetarian food...

            //         </p>

            //     </div>

            // `;


           displayHome(foods)

        }


        // DISPLAY HOME

        function displayHome(foodList) {

            app.innerHTML = `

                <!-- HERO -->

                <section class="text-center py-4 ">

                    <h1 class="display-5 fw-bold">

                        Delicious Vegetarian Food 
                        <img src="./images/logo1.jfif" class="rounded-circle" alt="logo" height="50px" width="50px">

                    </h1>

                    <p class="text-secondary fs-5">

                        Fresh food for every mood.

                    </p>


                    <!-- SEARCH -->

                    <div class="row justify-content-center mt-4">

                        <div class="col-12 col-md-8 col-lg-6">

                            <input
                                type="text"
                                id="searchInput"
                                class="form-control form-control-lg rounded-pill"
                                placeholder="Search vegetarian food..."
                            >

                        </div>

                    </div>

                </section>


                <!-- TITLE -->

                <div class="d-flex justify-content-between
                            align-items-center mb-4">

                    <h2 class="fw-bold mb-0">

                        Vegetarian Foods

                    </h2>

                </div>


                <!-- FOOD GRID -->

                <div
                    id="foodGrid"
                    class="row g-4"
                >

                </div>

            `;


            displayFoodCards(foodList);


            document
                .getElementById("searchInput")
                .addEventListener(
                    "input",
                    searchFoods
                );

        }


        // DISPLAY FOOD CARDS

        function displayFoodCards(foodList) {

            const foodGrid =
                document.getElementById(
                    "foodGrid"
                );


            if (foodList.length === 0) {

                foodGrid.innerHTML = `

                    <div class="col-12">

                        <div class="alert alert-warning text-center">

                            No food found.

                        </div>

                    </div>

                `;

                return;

            }


            foodGrid.innerHTML = "";
            // console.log("list",foodList)

            foodList.forEach(
                function(food) {


                    const price =
                        getPrice(
                            food.idMeal
                        );
                    console.log(food)
                    // console.log(price)
                    foodGrid.innerHTML += `

                        <div class="
                            col-12
                            col-sm-6
                            col-md-4
                            col-lg-3
                        " 
                        >

                            <div class="card h-100
                                        shadow-sm
                                        border-0"
                                        id="card">


                                <img
                                    src="${food.strMealThumb}"
                                    alt="${food.strMeal}"
                                    class="card-img-top"
                                    style="
                                        height:220px;
                                        object-fit:cover;
                                    "
                                >


                                <div class="card-body
                                            d-flex
                                            flex-column">


                                    <h5 class="card-title fw-bold">

                                        ${food.strMeal}

                                    </h5>


                                    <p class="text-success">

                                        <img src="./images/veg.jfif" class="rounded-circle" alt="logo" height="30px" width="30px"> 
                                        Vegetarian

                                    </p>


                                    <div class="
                                        d-flex
                                        justify-content-between
                                        align-items-center
                                        mt-auto
                                    ">

                                        <span class="
                                            fw-bold
                                            fs-5
                                            text-success
                                        ">

                                            ₹${price}

                                        </span>


                                        <button
                                            class="btn btn-success"
                                            onclick="showDetails('${food.idMeal}')"
                                        >

                                            View Details

                                        </button>

                                    </div>


                                </div>

                            </div>

                        </div>

                    `;

                }
            );

        }


        // SEARCH FOOD

        function searchFoods(event) {

            const searchText =
                event.target.value
                    .toLowerCase()
                    .trim();


            const filteredFoods =
                foods.filter(
                    function(food) {

                        return food.strMeal
                            .toLowerCase()
                            .includes(searchText);

                    }
                );


            displayFoodCards(
                filteredFoods
            );

        }


        // FOOD PRICE

        function getPrice(id) {

            const number =
                Number(id) || 0;


            return (
                149 +
                (number % 6) * 30
            );

        }


        // FOOD DETAILS

        function showDetails(id) {

            if (!checkLogin()) {

                showLogin();

                return;

            }


            app.innerHTML = `

                <div class="text-center py-5">

                    <div
                        class="spinner-border text-success"
                        role="status"
                    ></div>

                    <p class="text-secondary mt-3">

                        Loading food details...

                    </p>

                </div>

            `;


            currentFood =
                foods.find(
                    function(food) {

                        return (
                            food.idMeal === id
                        );

                    }
                );


            if (!currentFood) {

                throw new Error(
                    "Food details not found"
                );

            }


            currentQuantity = 1;


            displayDetails(
                currentFood
            );

        }


        // DISPLAY DETAILS

        function displayDetails(food) {

            const price =
                getPrice(
                    food.idMeal
                );


            app.innerHTML = `

                <div class="row g-4 align-items-center py-4">


                    <!-- IMAGE -->

                    <div class="
                        col-12
                        col-lg-6
                    ">

                        <img
                            src="${food.strMealThumb}"
                            alt="${food.strMeal}"
                            class="img-fluid rounded-4 shadow-sm w-100"
                        >

                    </div>


                    <!-- DETAILS -->

                    <div class="
                        col-12
                        col-lg-6
                    ">


                        <span class="badge bg-success mb-3">

                            <img src="./images/logo1.jfif" class="rounded-circle" alt="logo" height="50px" width="50px"> Vegetarian

                        </span>


                        <h1 class="fw-bold">

                            ${food.strMeal}

                        </h1>


                        <p class="text-secondary">

                            ${food.strCategory || "Vegetarian Food"}

                            •

                            ${food.strArea || "Delicious"}

                        </p>


                        <h2 class="
                            text-success
                            fw-bold
                            my-4
                        ">

                            ₹${price}

                        </h2>


                        <!-- QUANTITY -->

                        <div class="d-flex align-items-center
                                    gap-3 mb-4">


                            <button
                                class="btn btn-outline-success"
                                onclick="decreaseDetailQuantity()"
                            >

                                −

                            </button>


                            <span
                                id="detailQuantity"
                                class="fs-5 fw-bold"
                            >

                                1

                            </span>


                            <button
                                class="btn btn-outline-success"
                                onclick="increaseDetailQuantity()"
                            >

                                +

                            </button>


                        </div>


                        <button
                            class="btn btn-success btn-lg"
                            onclick="addToCart()"
                        >

                            🛒 Add to Cart

                        </button>


                        <button
                            class="btn btn-outline-secondary btn-lg ms-2"
                            onclick="showHome()"
                        >

                            Back

                        </button>


                    </div>

                </div>

            `;

        }

        // DETAIL QUANTITY

        function increaseDetailQuantity() {

            currentQuantity++;


            document
                .getElementById(
                    "detailQuantity"
                )
                .textContent =
                currentQuantity;

        }



        function decreaseDetailQuantity() {

            if (
                currentQuantity > 1
            ) {

                currentQuantity--;

            }


            document
                .getElementById(
                    "detailQuantity"
                )
                .textContent =
                currentQuantity;

        }

        // CART DATA

        function getCart() {

            return (
                JSON.parse(
                    localStorage.getItem(
                        "cart"
                    )
                ) || []
            );

        }



        function saveCart(cart) {

            localStorage.setItem(
                "cart",
                JSON.stringify(cart)
            );

        }

        // ADD TO CART

        function addToCart() {

            if (!currentFood) {

                return;

            }


            let cart =
                getCart();


            const price =
                getPrice(
                    currentFood.idMeal
                );


            const existingItem =
                cart.find(
                    function(item) {

                        return (
                            item.idMeal ===
                            currentFood.idMeal
                        );

                    }
                );


            if (existingItem) {

                existingItem.quantity +=
                    currentQuantity;

            }

            else {

                cart.push({

                    idMeal:
                        currentFood.idMeal,

                    name:
                        currentFood.strMeal,

                    image:
                        currentFood.strMealThumb,

                    price:
                        price,

                    quantity:
                        currentQuantity

                });

            }


            saveCart(cart);


            updateCartCount();


            alert(
                "Food added to cart! 🛒"
            );


            showCart();

        }

        // SHOW CART

        function showCart() {

            if (!checkLogin()) {

                showLogin();

                return;

            }


            const cart =
                getCart();


            if (cart.length === 0) {

                app.innerHTML = `

                    <div class="text-center py-5">

                        <div class="display-1">
                            🛒
                        </div>

                        <h2 class="fw-bold mt-3">

                            Your Cart is Empty

                        </h2>

                        <p class="text-secondary">

                            Add some delicious vegetarian food!

                        </p>


                        <button
                            class="btn btn-success"
                            onclick="showHome()"
                        >

                            Browse Food

                        </button>

                    </div>

                `;

                return;

            }


            app.innerHTML = `

                <div class="d-flex
                            justify-content-between
                            align-items-center
                            mb-4">

                    <h1 class="fw-bold">

                        Your Cart 🛒

                    </h1>

                </div>


                <div class="row g-4">


                    <!-- CART ITEMS -->

                    <div class="col-12 col-lg-8">

                        <div
                            id="cartItems"
                            class="d-flex flex-column gap-3"
                        ></div>

                    </div>


                    <!-- SUMMARY -->

                    <div class="col-12 col-lg-4">

                        <div class="card shadow-sm border-0">

                            <div class="card-body">


                                <h4 class="fw-bold mb-4">

                                    Order Summary

                                </h4>


                                <div class="
                                    d-flex
                                    justify-content-between
                                    mb-3
                                ">

                                    <span>
                                        Subtotal
                                    </span>

                                    <span id="cartSubtotal">
                                        ₹0
                                    </span>

                                </div>


                                <div class="
                                    d-flex
                                    justify-content-between
                                    mb-3
                                ">

                                    <span>
                                        Delivery
                                    </span>

                                    <span>
                                        ₹40
                                    </span>

                                </div>


                                <hr>


                                <div class="
                                    d-flex
                                    justify-content-between
                                    fw-bold
                                    fs-5
                                    mb-4
                                ">

                                    <span>
                                        Total
                                    </span>

                                    <span
                                        id="cartTotal"
                                        class="text-success"
                                    >
                                        ₹0
                                    </span>

                                </div>


                                <button
                                    class="btn btn-success w-100"
                                    onclick="showCheckout()"
                                >

                                    Proceed to Checkout

                                </button>


                            </div>

                        </div>

                    </div>


                </div>

            `;


            displayCartItems();

        }

        // DISPLAY CART ITEMS

        function displayCartItems() {

            const cart =
                getCart();


            const container =
                document.getElementById(
                    "cartItems"
                );


            let subtotal = 0;


            container.innerHTML = "";


            cart.forEach(
                function(item, index) {


                    const itemTotal =
                        item.price *
                        item.quantity;


                    subtotal +=
                        itemTotal;


                    container.innerHTML += `

                        <div class="card border-0 shadow-sm">

                            <div class="card-body">


                                <div class="row
                                            align-items-center
                                            g-3">


                                    <!-- IMAGE -->

                                    <div class="
                                        col-4
                                        col-sm-3
                                        col-md-2
                                    ">

                                        <img
                                            src="${item.image}"
                                            alt="${item.name}"
                                            class="img-fluid rounded"
                                        >

                                    </div>


                                    <!-- NAME -->

                                    <div class="
                                        col-8
                                        col-sm-5
                                        col-md-4
                                    ">

                                        <h5 class="fw-bold">

                                            ${item.name}

                                        </h5>

                                        <p class="
                                            text-secondary
                                            mb-0
                                        ">

                                            ₹${item.price}

                                        </p>

                                    </div>


                                    <!-- QUANTITY -->

                                    <div class="
                                        col-6
                                        col-sm-2
                                        col-md-3
                                    ">

                                        <div class="
                                            d-flex
                                            align-items-center
                                            gap-2
                                        ">


                                            <button
                                                class="btn btn-sm btn-outline-success"
                                                onclick="changeCartQuantity(${index}, -1)"
                                            >

                                                −

                                            </button>


                                            <span class="fw-bold">

                                                ${item.quantity}

                                            </span>


                                            <button
                                                class="btn btn-sm btn-outline-success"
                                                onclick="changeCartQuantity(${index}, 1)"
                                            >

                                                +

                                            </button>


                                        </div>

                                    </div>


                                    <!-- TOTAL -->

                                    <div class="
                                        col-4
                                        col-sm-1
                                        col-md-2
                                    ">

                                        <strong>

                                            ₹${itemTotal}

                                        </strong>

                                    </div>


                                    <!-- DELETE -->

                                    <div class="
                                        col-2
                                        col-sm-1
                                        col-md-1
                                        text-end
                                    ">

                                        <button
                                            class="btn btn-sm btn-outline-danger"
                                            onclick="removeCartItem(${index})"
                                        >

                                            🗑️

                                        </button>

                                    </div>


                                </div>

                            </div>

                        </div>

                    `;

                }
            );


            const delivery = 40;

            const total =
                subtotal + delivery;


            document
                .getElementById(
                    "cartSubtotal"
                )
                .textContent =
                `₹${subtotal}`;


            document
                .getElementById(
                    "cartTotal"
                )
                .textContent =
                `₹${total}`;

        }

        // CHANGE CART QUANTITY

        function changeCartQuantity(
            index,
            change
        ) {

            const cart =
                getCart();


            cart[index].quantity +=
                change;


            if (
                cart[index].quantity <= 0
            ) {

                cart.splice(
                    index,
                    1
                );

            }


            saveCart(cart);


            updateCartCount();


            showCart();

        }

        // REMOVE CART ITEM

        function removeCartItem(index) {

            const cart =
                getCart();


            cart.splice(
                index,
                1
            );


            saveCart(cart);


            updateCartCount();


            showCart();

        }

        // CART COUNT

        function updateCartCount() {

            const cart =
                getCart();


            const count =
                cart.reduce(
                    function(total, item) {

                        return (
                            total +
                            Number(
                                item.quantity
                            )
                        );

                    },
                    0
                );


            const cartCount =
                document.getElementById(
                    "cartCount"
                );


            if (cartCount) {

                cartCount.textContent =
                    count;

            }

        }


        // CHECKOUT

        function showCheckout() {

            if (!checkLogin()) {

                showLogin();

                return;

            }


            const cart =
                getCart();


            if (cart.length === 0) {

                showCart();

                return;

            }


            const subtotal =
                cart.reduce(
                    function(total, item) {

                        return (
                            total +
                            item.price *
                            item.quantity
                        );

                    },
                    0
                );


            const delivery = 40;

            const total =
                subtotal + delivery;


            const user =
                JSON.parse(
                    localStorage.getItem(
                        "user"
                    )
                );


            app.innerHTML = `

                <div class="row g-4">


                    <!-- DELIVERY DETAILS -->

                    <div class="col-12 col-lg-7">

                        <div class="card shadow-sm border-0">

                            <div class="card-body p-4">


                                <h2 class="fw-bold mb-4">

                                    📍 Delivery Details

                                </h2>


                                <form id="checkoutForm">


                                    <!-- NAME -->

                                    <div class="mb-3">

                                        <label
                                            class="form-label fw-semibold"
                                        >
                                            Full Name *
                                        </label>

                                        <input
                                            type="text"
                                            id="customerName"
                                            class="form-control"
                                            value="${user ? user.name : ""}"
                                            required
                                        >

                                    </div>


                                    <!-- PHONE -->

                                    <div class="mb-3">

                                        <label
                                            class="form-label fw-semibold"
                                        >
                                            Mobile Number *
                                        </label>

                                        <input
                                            type="tel"
                                            id="customerPhone"
                                            class="form-control"
                                            placeholder="Enter mobile number"
                                            required
                                        >

                                    </div>


                                    <div class="row">


                                        <!-- HOUSE -->

                                        <div class="col-12 col-md-6 mb-3">

                                            <label
                                                class="form-label fw-semibold"
                                            >
                                                House / Flat Number *
                                            </label>

                                            <input
                                                type="text"
                                                id="house"
                                                class="form-control"
                                                placeholder="House / Flat"
                                                required
                                            >

                                        </div>


                                        <!-- STREET -->

                                        <div class="col-12 col-md-6 mb-3">

                                            <label
                                                class="form-label fw-semibold"
                                            >
                                                Street / Area *
                                            </label>

                                            <input
                                                type="text"
                                                id="street"
                                                class="form-control"
                                                placeholder="Street / Area"
                                                required
                                            >

                                        </div>


                                        <!-- CITY -->

                                        <div class="col-12 col-md-6 mb-3">

                                            <label
                                                class="form-label fw-semibold"
                                            >
                                                City *
                                            </label>

                                            <input
                                                type="text"
                                                id="city"
                                                class="form-control"
                                                placeholder="City"
                                                required
                                            >

                                        </div>


                                        <!-- STATE -->

                                        <div class="col-12 col-md-6 mb-3">

                                            <label
                                                class="form-label fw-semibold"
                                            >
                                                State *
                                            </label>

                                            <input
                                                type="text"
                                                id="state"
                                                class="form-control"
                                                placeholder="State"
                                                required
                                            >

                                        </div>


                                    </div>


                                    <!-- PINCODE -->

                                    <div class="mb-3">

                                        <label
                                            class="form-label fw-semibold"
                                        >
                                            Pincode *
                                        </label>

                                        <input
                                            type="text"
                                            id="pincode"
                                            class="form-control"
                                            placeholder="6-digit pincode"
                                            required
                                        >

                                    </div>


                                    <!-- INSTRUCTIONS -->

                                    <div class="mb-4">

                                        <label
                                            class="form-label fw-semibold"
                                        >
                                            Delivery Instructions
                                        </label>

                                        <input
                                            type="text"
                                            id="instructions"
                                            class="form-control"
                                            placeholder="Optional"
                                        >

                                    </div>


                                    <!-- PAYMENT -->

                                    <h4 class="fw-bold mb-3">

                                        💳 Payment Method

                                    </h4>


                                    <div class="mb-4">

                                        <select
                                            id="paymentMethod"
                                            class="form-select"
                                        >

                                            <option
                                                value="Cash on Delivery"
                                            >
                                                Cash on Delivery
                                            </option>

                                            <option value="UPI">
                                                UPI
                                            </option>

                                            <option value="Card">
                                                Card
                                            </option>

                                        </select>

                                    </div>


                                    <button
                                        type="submit"
                                        class="btn btn-success btn-lg w-100"
                                    >

                                        Place Order

                                    </button>


                                </form>


                            </div>

                        </div>

                    </div>



                    <!-- ORDER SUMMARY -->

                    <div class="col-12 col-lg-5">

                        <div class="card shadow-sm border-0">

                            <div class="card-body p-4">


                                <h3 class="fw-bold mb-4">

                                    🧾 Order Summary

                                </h3>


                                <div class="
                                    d-flex
                                    justify-content-between
                                    mb-3
                                ">

                                    <span>
                                        Subtotal
                                    </span>

                                    <span>
                                        ₹${subtotal}
                                    </span>

                                </div>


                                <div class="
                                    d-flex
                                    justify-content-between
                                    mb-3
                                ">

                                    <span>
                                        Delivery
                                    </span>

                                    <span>
                                        ₹${delivery}
                                    </span>

                                </div>


                                <hr>


                                <div class="
                                    d-flex
                                    justify-content-between
                                    fw-bold
                                    fs-4
                                ">

                                    <span>
                                        Total
                                    </span>

                                    <span class="text-success">
                                        ₹${total}
                                    </span>

                                </div>


                            </div>

                        </div>

                    </div>


                </div>

            `;


            document
                .getElementById(
                    "checkoutForm"
                )
                .addEventListener(
                    "submit",
                    placeOrder
                );

        }

        // PLACE ORDER

        function placeOrder(event) {

            event.preventDefault();


            const cart =
                getCart();


            const subtotal =
                cart.reduce(
                    function(total, item) {

                        return (
                            total +
                            item.price *
                            item.quantity
                        );

                    },
                    0
                );


            const delivery = 40;

            const total =
                subtotal + delivery;


            const order = {

                orderId:
                    "ORD" + Date.now(),


                customerName:
                    document
                        .getElementById(
                            "customerName"
                        )
                        .value
                        .trim(),


                phone:
                    document
                        .getElementById(
                            "customerPhone"
                        )
                        .value
                        .trim(),


                address: {

                    house:
                        document
                            .getElementById(
                                "house"
                            )
                            .value
                            .trim(),

                    street:
                        document
                            .getElementById(
                                "street"
                            )
                            .value
                            .trim(),

                    city:
                        document
                            .getElementById(
                                "city"
                            )
                            .value
                            .trim(),

                    state:
                        document
                            .getElementById(
                                "state"
                            )
                            .value
                            .trim(),

                    pincode:
                        document
                            .getElementById(
                                "pincode"
                            )
                            .value
                            .trim()

                },


                instructions:
                    document
                        .getElementById(
                            "instructions"
                        )
                        .value
                        .trim(),


                paymentMethod:
                    document
                        .getElementById(
                            "paymentMethod"
                        )
                        .value,


                items:
                    cart,


                subtotal:
                    subtotal,


                delivery:
                    delivery,


                total:
                    total,


                orderDate:
                    new Date()
                        .toLocaleString(),


                status:
                    "Order Placed"

            };


            let orders =
                JSON.parse(
                    localStorage.getItem(
                        "orders"
                    )
                ) || [];


            orders.push(order);


            localStorage.setItem(
                "orders",
                JSON.stringify(orders)
            );


            localStorage.removeItem(
                "cart"
            );


            updateCartCount();


            showOrderSuccess(
                order
            );

        }

        // ORDER SUCCESS

        function showOrderSuccess(order) {

            app.innerHTML = `

                <div class="
                    text-center
                    py-5
                ">


                    <div class="display-1">
                        🎉
                    </div>


                    <h1 class="fw-bold text-success mt-3">

                        Order Placed Successfully!

                    </h1>


                    <p class="text-secondary">

                        Thank you for ordering with Foodie.

                    </p>


                    <div class="
                        alert
                        alert-success
                        d-inline-block
                        mt-3
                    ">

                        <strong>
                            Order ID:
                        </strong>

                        ${order.orderId}

                    </div>


                    <p class="fs-5">

                        Total Amount:

                        <strong class="text-success">

                            ₹${order.total}

                        </strong>

                    </p>


                    <div class="d-flex
                                justify-content-center
                                flex-wrap
                                gap-2
                                mt-4">


                        <button
                            class="btn btn-success"
                            onclick="showOrders()"
                        >

                            View My Orders

                        </button>


                        <button
                            class="btn btn-outline-success"
                            onclick="showHome()"
                        >

                            Continue Shopping

                        </button>


                    </div>


                </div>

            `;

        }

        // MY ORDERS

        function showOrders() {

            if (!checkLogin()) {

                showLogin();

                return;

            }


            const orders =
                JSON.parse(
                    localStorage.getItem(
                        "orders"
                    )
                ) || [];


            app.innerHTML = `

                <div class="d-flex
                            justify-content-between
                            align-items-center
                            mb-4">

                    <h1 class="fw-bold">

                        My Orders 📦

                    </h1>

                </div>


                <div id="ordersContainer">

                </div>

            `;


            const container =
                document.getElementById(
                    "ordersContainer"
                );


            if (orders.length === 0) {

                container.innerHTML = `

                    <div class="text-center py-5">

                        <div class="display-1">
                            📦
                        </div>

                        <h2 class="fw-bold mt-3">

                            No Orders Yet

                        </h2>

                        <p class="text-secondary">

                            Your placed orders will appear here.

                        </p>


                        <button
                            class="btn btn-success"
                            onclick="showHome()"
                        >

                            Order Food

                        </button>

                    </div>

                `;

                return;

            }


            const reversedOrders =
                [...orders].reverse();


            reversedOrders.forEach(
                function(order) {


                    let itemsHTML = "";


                    order.items.forEach(
                        function(item) {

                            itemsHTML += `

                                <div class="
                                    d-flex
                                    align-items-center
                                    gap-3
                                    mb-3
                                ">


                                    <img
                                        src="${item.image}"
                                        alt="${item.name}"
                                        class="rounded"
                                        style="
                                            width:70px;
                                            height:60px;
                                            object-fit:cover;
                                        "
                                    >


                                    <div>

                                        <strong>

                                            ${item.name}

                                        </strong>

                                        <p class="
                                            text-secondary
                                            mb-0
                                        ">

                                            Qty:
                                            ${item.quantity}

                                            ×

                                            ₹${item.price}

                                        </p>

                                    </div>


                                </div>

                            `;

                        }
                    );


                    container.innerHTML += `

                        <div class="
                            card
                            border-0
                            shadow-sm
                            mb-4
                        ">

                            <div class="card-body">


                                <div class="
                                    d-flex
                                    justify-content-between
                                    align-items-center
                                    flex-wrap
                                    gap-2
                                    mb-3
                                ">


                                    <strong>

                                        ${order.orderId}

                                    </strong>


                                    <span class="
                                        badge
                                        text-white
                                        bg-success
                                        p-2
                                    ">

                                        ✅ ${order.status}

                                    </span>


                                </div>


                                <p class="text-secondary">

                                    Ordered on:
                                    ${order.orderDate}

                                </p>


                                <hr>


                                ${itemsHTML}


                                <hr>


                                <div class="
                                    d-flex
                                    justify-content-between
                                    fw-bold
                                    fs-5
                                ">

                                    <span>
                                        Total
                                    </span>

                                    <span class="text-success">

                                        ₹${order.total}

                                    </span>

                                </div>


                                <p class="mt-3 mb-0">

                                    📍

                                    ${order.address.house},

                                    ${order.address.street},

                                    ${order.address.city},

                                    ${order.address.state}

                                    -

                                    ${order.address.pincode}

                                </p>


                            </div>

                        </div>

                    `;

                }
            );

        }

        // PROFILE

        function showProfile() {

            if (!checkLogin()) {

                showLogin();

                return;

            }


            const user =
                JSON.parse(
                    localStorage.getItem(
                        "user"
                    )
                );


            app.innerHTML = `

                <div class="
                    row
                    justify-content-center
                ">

                    <div class="
                        col-12
                        col-md-8
                        col-lg-6
                    ">

                        <div class="
                            card
                            shadow-sm
                            border-0
                        ">

                            <div class="
                                card-body
                                p-4
                            ">


                                <div class="
                                    text-center
                                    mb-4
                                ">

                                    <div class="
                                        rounded-circle
                                        bg-success
                                        text-white
                                        d-inline-flex
                                        justify-content-center
                                        align-items-center
                                    "
                                    style="
                                        width:80px;
                                        height:80px;
                                        font-size:35px;
                                    ">

                                        👤

                                    </div>


                                    <h2 class="
                                        fw-bold
                                        mt-3
                                    ">

                                        My Profile

                                    </h2>

                                </div>


                                <!-- NAME -->

                                <div class="
                                    border-bottom
                                    py-3
                                ">

                                    <small class="text-secondary">

                                        Name

                                    </small>

                                    <h5 class="mb-0">

                                        ${user.name}

                                    </h5>

                                </div>


                                <!-- EMAIL -->

                                <div class="
                                    border-bottom
                                    py-3
                                ">

                                    <small class="text-secondary">

                                        Email

                                    </small>

                                    <h5 class="mb-0">

                                        ${user.email}

                                    </h5>

                                </div>


                                <!-- LOGOUT -->

                                <button
                                    class="
                                        btn
                                        btn-danger
                                        w-100
                                        mt-4
                                    "
                                    onclick="logout()"
                                >

                                    🚪 Logout

                                </button>


                            </div>

                        </div>

                    </div>

                </div>

            `;

        }

        // LOGOUT

        function logout() {

            localStorage.removeItem(
                "isLoggedIn"
            );


            updateProfileName();


            alert(
                "You have been logged out."
            );


            showLogin();

        }

        // MAKE FUNCTIONS AVAILABLE TO HTML

        window.showRegister =showRegister;

        window.registerUser =registerUser;

        window.showLogin =showLogin;

        window.loginUser =loginUser;

        window.showHome =showHome;

        window.showDetails =showDetails;

        window.increaseDetailQuantity =increaseDetailQuantity;

        window.decreaseDetailQuantity =decreaseDetailQuantity;

        window.addToCart = addToCart;

        window.showCart = showCart;

        window.changeCartQuantity = changeCartQuantity;

        window.removeCartItem =removeCartItem;

        window.showCheckout = showCheckout;

        window.placeOrder = placeOrder;

        window.showOrderSuccess = showOrderSuccess;

        window.showOrders =  showOrders;

        window.showProfile = showProfile;

        window.logout = logout;

        // START APPLICATION

        updateCartCount();

        updateProfileName();


        if (
            localStorage.getItem(
                "isLoggedIn"
            ) === "true"
        ) {

            showHome();

        }

        else {

            showRegister();

        }

    }


    // ERROR PAGE=

    catch (error) {

        console.error(
            "Foodie Error:",
            error
        );


        const app =
            document.getElementById(
                "app"
            );


        app.innerHTML = `

            <div class="
                container
                py-5
            ">

                <div class="
                    row
                    justify-content-center
                ">

                    <div class="
                        col-12
                        col-md-8
                        col-lg-6
                    ">

                        <div class="
                            alert
                            alert-danger
                            text-center
                            shadow-sm
                        ">

                            <div class="display-4 mb-3">

                                ❌

                            </div>


                            <h2 class="fw-bold">

                                Something went wrong

                            </h2>


                            <p>

                                Unable to load Foodie.

                            </p>


                            <p>

                                Please check your internet
                                connection and try again.

                            </p>


                            <button
                                class="btn btn-danger"
                                onclick="location.reload()"
                            >

                                Try Again

                            </button>


                        </div>

                    </div>

                </div>

            </div>

        `;

    }

}


// START FOODIE

foodieApp();