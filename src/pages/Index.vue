<template>
  <main>
    <b-container>
      <b-row>
        <b-col sm="12" md="8" class="mb-lg-5">
          <b-row>
            <b-col :md="6" class="mb-4">
              <b-card
                title="Card Title"
                sub-title="By: Jhon Doe, Date: 22 April 2018"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
              >
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </b-card>
            </b-col>

            <b-col :md="6" class="mb-4">
              <b-card
                title="Some Card Title"
                sub-title="By: Jhon Doe, Date: 22 April 2018"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
              >
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </b-card>
            </b-col>

            <b-col :md="6" class="mb-4">
              <b-card
                title="Some quick example text to build on the"
                sub-title="By: Jhon Doe, Date: 22 April 2018"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
              >
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </b-card>
            </b-col>
          </b-row>
        </b-col>

        <b-col sm="12" md="4">
          <Sidebar />
        </b-col>
      </b-row>
    </b-container>

    <div class="pagination mb-5">
      <b-pagination-nav hide-goto-end-buttons
        align="center"
        :number-of-pages="10"
        base-url="#"
        v-model="currentPage"
        first-text=""
        prev-text="‹ Previous"
        next-text="Next ›"
      />
    </div>
  </main>
</template>

<script>
import Sidebar from '@/components/sidebar'

export default {
  name: 'index',
  components: {
    Sidebar,
  }
}
</script>

<style>
</style>
