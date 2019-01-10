<template>
  <main>
    <b-container>
      <b-row>
        <b-col sm="12" md="8" class="mb-lg-5">
          <article class="post mb-5">
            <header class="mb-4">
              <h3>Duplex home purchase for future</h3>
              <time>By: Jhon Doe, Date: 22 April 2018</time>
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
  name: 'page',
  components: {
    Sidebar,
  }
}
</script>
