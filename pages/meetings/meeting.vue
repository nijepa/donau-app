<template>
  <section>
    <form action="">
      <div class="inputs" key="1">
        <h3 class="action__title">{{actionTitle}}</h3>
        <label>
          <input
            type="text"
            name="text"
            id="email"
            v-model="meeting.title"
            required
            placeholder=" "
          />
          <span>Naslov</span>
        </label>
        <!--  <div 
          v-show="submitted && !username" 
          class="invalid-feedback"
        >
          Username is required
        </div> -->
        <label :class="meeting.date ? 'desc__norm' : 'desc__trans'"
          >Datum</label
        >
        <date-picker
          placeholder="Izaberi datum"
          format="dd MMM yyyy"
          v-model="meeting.date" />

<!--         <label>
          <input
            type="date"
            name="text"
            v-model="meeting.date"
            id="password"
            required
            placeholder=" "
          />
          <span>Datum</span>
        </label> -->
        <label :class="meeting.company ? 'desc__norm' : 'desc__trans'"
          >Firma</label
        >
        <v-select
          :options="companies"
          label="title"
          v-model="meeting.company"
          placeholder="Izaberi firmu"
          class="style-chooser"
        ></v-select>
        <!-- <div 
          v-show="submitted && !password" 
          class="invalid-feedback"
        >
          Password is required
        </div> -->
        <label :class="meeting.description ? 'desc__norm' : 'desc__trans'"
          >Opis</label
        >
        <div class="">
          <Editor :desc="meeting.description" @changed="changedDesc" />
        </div>

        <div class="btn__save">
          <button @click.prevent="save">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#494c4e"
                d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2m0-2C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"
              />
              <path
                fill="#494c4e"
                d="M10.5 16.5c-.42 0-.82-.176-1.094-.484l-2.963-2.97c-.274-.26-.443-.653-.443-1.06 0-.405.17-.798.462-1.078.482-.513 1.557-.55 2.113.037l1.925 1.93 4.943-4.958c.52-.55 1.575-.57 2.132.02.256.242.425.634.425 1.04 0 .402-.164.79-.45 1.068l-5.993 6.012c-.238.267-.637.443-1.057.443z"
              />
            </svg>
            <div>Sačuvaj</div>
          </button>
          <nuxt-link tag="button" to="/meetings">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#494c4e" fill-rule="evenodd">
                <path
                  d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12A12 12 0 0 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a10.015 10.015 0 0 1-10 10z"
                />
                <path
                  d="M17.71 16.29c.39.393.39 1.027 0 1.42a1.014 1.014 0 0 1-1.42 0L12 13.42l-4.29 4.29a1.014 1.014 0 0 1-1.42 0 1.008 1.008 0 0 1 0-1.42L10.58 12 6.29 7.71a1.004 1.004 0 0 1 1.42-1.42L12 10.58l4.29-4.29a1.004 1.004 0 0 1 1.42 1.42L13.42 12l4.29 4.29z"
                />
              </g>
            </svg>
            <div>Odustani</div>
          </nuxt-link>
        </div>

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
    </form>
  </section>
</template>

<script>
export default {
  name: 'Meeting',
  props: ['id'],
  data() {
    return {
      meeting: {
        title: '',
        description: '',
        date: new Date(),
        company: null,
        user: {
          userId: $nuxt.$fire.auth.currentUser.toString(),
          name: $nuxt.$fire.auth.currentUser.email,
        },
        comments: [],
        active: true,
        bookmarked: false,
        favorited: false
      },
      companies: [],
      newMeeting: true
    }
  },
  computed: {
    actionTitle() {
      return this.newMeeting ? 'novi sastanak' : 'izmeni sastanak'
    }
  },
  methods: {
    changedDesc(desc) {
      this.meeting.description = desc
    }, 
    async save() {
      if (this.$route.params.id) {
        const id =this.$route.params.id
        const messageRef = this.$fire.firestore.collection('meetings').doc(id.toString())
        try {
          await messageRef.update(this.meeting)
        } catch (e) {
          alert(e)
          return
        }
      } else {
        const messageRef = this.$fire.firestore.collection('meetings')
        try {
          await messageRef.doc().set(this.meeting)
          console.log('add')
          
        } catch (e) {
          alert(e)
          return
        }
        this.$router.push({name:'meetings'})
      }
      
      //alert('Success.')
    },
    async getCompanies() {
      let messageRef = null
      messageRef = await this.$fire.firestore
        .collection('companies')
        .orderBy('name')
        .get()

      try {
        this.companies = await messageRef.docs.map((doc) => {
          return { title: doc.data().name, companyId: doc.data().id }
        })
        //this.comp = messageDoc
      } catch (e) {
        alert(e)
        return
      }
    },
    async getMeeting() {
      let docRef = null
      const id =this.$route.params.id
      console.log('eeee' + id)
      docRef = await this.$fire.firestore
        .collection('meetings')
        .doc(id)

      docRef.get().then((doc) => {
          if (doc.exists) {
              //console.log("Document data:", doc.data());
              this.meeting = doc.data()
              this.meeting.id = doc.id
              this.meeting.date = doc.data().date.toDate()
              this.newMeeting = false
          } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
          }
      }).catch((error) => {
          console.log("Error getting document:", error);
      });
    }
  },
  mounted() {
    this.getCompanies()
    if(this.$route.params.id) this.getMeeting()
  },
}
</script>

<style lang="scss">
.vdp-datepicker input {
  font-family: 'Ubuntu Condensed', sans-serif;
  font-size: 0.8em;
  font-weight: 400;
  letter-spacing: 1px;
}
.v-select {
  max-width: 20em;
}
.style-chooser .vs__search::placeholder,
.style-chooser .vs__dropdown-toggle,
.style-chooser .vs__dropdown-menu 
.style-chooser #vs2__listbox{
  text-align: left;
  cursor: pointer;
  font-family: 'Ubuntu Condensed', sans-serif;
  font-weight: 400;
  font-size: 0.9em;
  border: 2px solid transparent;
  border-bottom: 2px solid var(--blue-dark);
  letter-spacing: 1px;
}
.style-chooser .vs__dropdown-toggle:hover {
  border: 2px solid var(--blue-dark);
}
.desc__norm {
  margin-left: 1em;
  margin-bottom: -1em;
  font-size: 0.8em;
  color: var(--blue-dark);
  transform: translateY(0px);
  transition: all 0.4s ease;
}
.desc__trans {
  color: transparent;
  transform: translateY(50px);
  transition: all 0.4s ease;
}
.action__title {
  text-transform: uppercase;
  justify-self: center;
  padding: .5em 1em;
  color: var(--blue-dark);
  font-weight: 800;
  //border: 2px solid var(--blue-dark);
  //border-radius: .2em;
  //box-shadow: 0px 0px 2px 2px var(--blue-dark) inset;
}
form {
  display: grid;
  align-self: center;
  justify-self: center;
  padding: 3em 1em 1em 1em;
  border: 1px solid var(--blue-dark);
  border-radius: 0.2em;
  margin: .2em;
  //width: 300px;
  //height: 500px;
  box-shadow: 0 0 1px 1px var(--blue-dark);
}
.btn__save {
  display: flex;
  justify-self: center;
  gap: 1em;

  button {
    display: flex;
    align-items: center;
    gap: 0.5em;
    background-color: transparent;
    border-radius: 0.2em;
    border: 2px solid var(--blue-dark);
    padding: 0.5em 1em;
    cursor: pointer;
    transition: all 0.4s ease;
    div {
      font: inherit;
      font-weight: 600;
      letter-spacing: 1px;
    }
  }
  button:hover {
    background-color: var(--blue-dark);

    div {
      color: whitesmoke;
    }
    svg path {
      fill: whitesmoke;
    }
  }
}
</style>
