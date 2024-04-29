import { CustomersReview, Heroes, SuperQuality, SpecialOffers, PopularProducts, Footer, Subscribe, Services } from './sections/index.js'

const App = () => (
  <main className="relative">
    <div>Nav</div>
    <section className="xl:padding-1 wide:padding-r padding-b">
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

    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>

  </main>

);


export default App;