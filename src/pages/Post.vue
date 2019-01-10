<template>
  <main>
    <b-container>
      <b-row>
        <b-col sm="12" md="8" class="mb-lg-5">
          <article class="post mb-5">
            <header class="mb-4">
              <h3>Duplex home purchase for future</h3>
              <time class="text-secondary">By: Jhon Doe, Date: 22 April 2018</time>
            </header>

            <div class="post-thumbnail mb-4">
              <b-img src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image" />
            </div>

            <div class="entry mb-4">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mauris tellus, imperdiet quis tincidunt id, sollicitudin eu ipsum. Mauris condimentum rhoncus scelerisque. Praesent ac elementum lectus. Etiam pellentesque sem non viverra.</p>
              <p>venenatis. Aliquam sit amet sagittis nunc. Cras tortor lacus, molestie eu mollis id, rutrum ac augue. Vivamus et efficitur tortor, id porttitor ex. Mauris accumsan ex eget est venenatis hendrerit. Maecenas maximus risus id nisi faucibus sagittis. Nam imperdiet scelerisque eros quis ultricies. Cras auctor eros commodo, placerat mi vitae, pretium nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dictum id odio sed accumsan. Pellentesque convallis est gravida, pretium leo non, feugiat magna.</p>
              <p>Cras posuere, massa nec placerat rhoncus, risus urna maximus nunc, ut mollis augue nulla sit amet urna. Vivamus placerat tempor neque at auctor. Donec consequat risus eros, nec imperdiet nisi posuere sed. Vestibulum a consequat justo. Nam nec leo dignissim, sollicitudin erat sed, vestibulum lorem. Sed quis accumsan arcu, finibus mattis risus. Morbi sit amet ligula consectetur enim fermentum lacinia. Morbi dapibus justo metus, at eleifend sem tempor sodales. Donec molestie suscipit eros, vitae feugiat ante efficitur quis. Phasellus ac augue et sapien tristique pharetra id sit amet diam. Curabitur vel erat ex. Aliquam non leo in erat aliquet rutrum nec ac velit. Donec aliquam mollis mattis.</p>
              <p>Nullam sit amet scelerisque enim. Duis rutrum tellus eget tincidunt convallis. Fusce at tincidunt enim. Vivamus vitae fermentum lorem. Nulla eget ornare justo. Vestibulum vitae tempus justo, vitae consectetur mi. Donec mattis dolor nec tempor pretium. Ut et elit vel ipsum viverra pellentesque et quis lectus. Nam imperdiet, turpis at placerat euismod, leo sapien tristique diam, sed dignissim velit mi nec dolor. Donec pellentesque ex ac erat mollis rhoncus. Vestibulum pretium, purus sit amet accumsan lacinia, nulla leo scelerisque lacus, a convallis erat felis id magna. Suspendisse potenti. Nam orci tortor, tincidunt vel felis quis, malesuada cursus est.</p>
            </div>

            <footer class="d-flex justify-content-between">
              <div class="post-social">
                Share
              </div>

              <div class="post-tags d-flex">
                <div><strong>Tags:</strong></div>

                <ul class="no-style-list list-inline">
                  <li><a href="#">Design</a></li>
                  <li><a href="#">Coding</a></li>
                  <li><a href="#">Ui</a></li>
                </ul>
              </div>
            </footer>
          </article>

          <section class="post-author mb-5">
            <b-media>
              <b-img slot="aside" class="rounded" blank blank-color="#ccc" width="180" alt="placeholder" />
              <h4>Donal Smith</h4>
              <div class="text-secondary mb-3">Post Editor</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta consectetur nisl. Sed at vehicula justo. Nulla ac fermentum lorem. Etiam et auctor ligula, vel tincidunt felis.</p>
            </b-media>
          </section>

          <section class="comments">
            <h4 class="mb-4">02 Comments</h4>
            
            <div class="comment-list mb-5">
              <ul class="list-unstyled">
                <b-media tag="li" class="mb-4">
                  <b-img slot="aside" class="rounded" blank blank-color="#ccc" width="70" alt="placeholder" />
                  <h5 class="mb-1">Donal Smith</h5>
                  <div class="text-secondary mb-2">1 Hour ago</div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta consectetur nisl. Sed at vehicula justo. Nulla ac fermentum lorem. Etiam et auctor ligula, vel tincidunt felis.</p>
                  <div class="comment-reply mb-4"><b-button size="sm" variant="primary">Reply</b-button></div>

                  <b-media>
                    <b-img slot="aside" class="rounded" blank blank-color="#ccc" width="70" alt="placeholder" />
                    <h5 class="mb-1">Donal Smith</h5>
                    <div class="text-secondary mb-2">1 Hour ago</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta consectetur nisl. Sed at vehicula justo. Nulla ac fermentum lorem. Etiam et auctor ligula, vel tincidunt felis.</p>
                    <div class="comment-reply"><b-button size="sm" variant="primary">Reply</b-button></div>
                  </b-media>
                </b-media>

                <b-media tag="li">
                  <b-img slot="aside" class="rounded" blank blank-color="#ccc" width="70" alt="placeholder" />
                  <h5 class="mb-1">Donal Smith</h5>
                  <div class="text-secondary mb-2">1 Hour ago</div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta consectetur nisl. Sed at vehicula justo. Nulla ac fermentum lorem. Etiam et auctor ligula, vel tincidunt felis.</p>
                  <div class="comment-reply"><b-button size="sm" variant="primary">Reply</b-button></div>
                </b-media>
              </ul>
            </div>

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
                  <b-button type="submit" class="comment-submit" variant="primary">Submit ›</b-button>
                </b-form-group>
              </b-form>
            </div>
          </section>
        </b-col>

        <b-col sm="12" md="4">
          <Sidebar />
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>

<script>
import Sidebar from '@/components/sidebar';

export default {
  name: 'post',
  components: {
    Sidebar,
  }
}
</script>
