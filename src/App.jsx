import { CustomersReview, Heroes, SuperQuality, SpecialOffers, PopularProducts, Footer, Services } from './sections/index.js'
import Nav from './components/Nav.jsx';

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Heroes />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffers />
    </section>

    <section className="bg-pale-blue padding">
      <CustomersReview />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>

  </main>

);


export default App;