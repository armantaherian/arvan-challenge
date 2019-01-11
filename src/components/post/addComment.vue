<template>
  <div class="comment-form mb-5">
    <h4 class="mb-4">Write Your Comment</h4>

    <b-form @submit="onSubmit">
      <b-form-group>
        <b-row>
          <b-col md="6">
            <b-form-input required
              v-model="name"
              type="text"
              class="mb-3 mb-md-0"
              placeholder="Name"
            />
          </b-col>

          <b-col md="6">
            <b-form-input required
              v-model="email"
              type="email"
              placeholder="Email Address"
            />
          </b-col>
        </b-row>
      </b-form-group>

      <b-form-group>
        <b-form-textarea required
          id="message"
          v-model="message"
          placeholder="Message"
          :rows="3"
          :max-rows="6"
        />
      </b-form-group>

      <b-form-group>
        <b-button :disabled="isLoading" type="submit" class="comment-submit" variant="primary">Submit ›</b-button>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'addComment',
  data () {
    return {
      name: '',
      email: '',
      message: '',
      isLoading: false,
    }
  },
  props: {
    slug: {
      type: String,
      required: true,
    }
  },
  methods: {
    onSubmit(e) {
      this.isLoading = true
      e.preventDefault()

      this.$store.dispatch('addComment', {
        slug: this.slug,
        name: this.name,
        email: this.email,
        message: this.message,
      }).then(r => {
        this.name = ''
        this.email = ''
        this.message = ''
        this.isLoading = false
      })
    }
  }
}
</script>
