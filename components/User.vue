<template>
  <div class="cont">
    <div class="hello">
      <div class="inputs" key="1">
        <label>
          <input
            type="text"
            name="text"
            id="email"
            v-model="auth.email"
            required
            placeholder=" "
          />
          <span>E-mail</span>
        </label>
        <div v-show="submitted && !username" class="invalid-feedback">
          Username is required
        </div>
        <label>
          <input
            type="password"
            name="password"
            v-model="auth.password"
            id="password"
            required
            placeholder=" "
          />
          <span>Password</span>
        </label>
        <div v-show="submitted && !password" class="invalid-feedback">
          Password is required
        </div>
        <label>
          <input
            type="text"
            name="displayName"
            v-model="auth.displayName"
            id="displayName"
            placeholder=" "
          />
          <span>Display Name</span>
        </label>
        <label>
          <input
            type="tel"
            name="phone"
            v-model="auth.phoneNumber"
            id="phone"
            placeholder=" "
          />
          <span>Phone</span>
        </label>
      
        <button @click="signup">
          <div>Save</div>
        </button>
        <!--         <transition name="bounce">
            <p 
              v-show="message" 
              @click="clear" 
              class="invalid-feedback"
            >
              {{ message }}
            </p>
          </transition> -->
        <!-- <img 
            v-show="status.loggingIn" 
            src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" 
          /> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data() {
    return {
      isLoaded: false,
      auth: {
        email: '',
        password: '',
        displayName: '',
        photoURL: '',
        phoneNumber: ''
      },
      submitted: false,
      user: null,
    }
  },
  methods: {
    signup() {
      this.$fire.auth
        .createUserWithEmailAndPassword(this.auth.email, this.auth.password)
        .catch((error) => {
          console.log(error)
        })
        .then((user) => {
          this.user = user
          this.updateUser()
          //this.$router.push('/')
        })
    },
    async writeToFirestore(user) {
      const messageRef = this.$fire.firestore.collection('users').doc(user.id)
      try {
        await messageRef.set({
          bio: 'comp!',
          displayName: user.displayName,
          phoneNumber: user.phoneNumber,
          photoURL: user.photoURL,
          email: user.email
          //timestamp: this.$fire.firestore.FieldValue.serverTimestamp()
        })
      } catch (e) {
        alert(e)
        return
      }
      //alert('Success.')
    },
      
    updateUser() {
      const user = this.$fire.auth.currentUser;
      user.updateProfile({
        displayName: this.auth.displayName,
        photoURL: this.auth.photoURL || "https://picsum.photos/200",
        phoneNumber: this.auth.phoneNumber
      }).then(() => {
          this.writeToFirestore(user)
        // Update successful
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      });  
    }
  },
}
</script>

<style></style>
