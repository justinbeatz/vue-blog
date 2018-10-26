<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div class="card card-signin my-5">
                    <div class="card-body">
                        <h5 class="card-title text-center">Edit Profile</h5>
                        <form class="form-signin" @submit.prevent="handleSubmit">
                        <div class="form-label-group text-left">
                            <label for="inputEmail"><b>Email address</b></label>
                            <input type="email" id="inputEmail" class="form-control"
                             placeholder="Email address" v-model="username" required autofocus>
                        </div>

                        <div class="form-label-group">
                            <input type="password" id="inputPassword" class="form-control"
                             placeholder="Password" v-model="password" required>
                            <label for="inputPassword">Password</label>
                        </div>

                        <div class="custom-control custom-checkbox mb-3">
                            <input type="checkbox" class="custom-control-input" id="rememberMe"
                            v-model="remember">
                            <label class="custom-control-label"
                            for="rememberMe">Remember Me</label>
                        </div>
                        <button class="btn btn-lg btn-primary btn-block text-uppercase"
                        type="submit">Sign in</button>
                         <router-link to="/register" class="btn btn-link">Register</router-link>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
