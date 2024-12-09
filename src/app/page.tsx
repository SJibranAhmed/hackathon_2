// بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
import Browse from "@/components/Browse";
import Content from "@/components/Content";
import Customer from "@/components/Customer";
import NewArrivals from "@/components/NewArrivals";
import TopSelling from "@/components/TopSelling";

export default function Home() {
  return (
    <main>
      <section>
        <Content />
      </section>
      <section>
        <NewArrivals />
      </section>
      <section >
        <TopSelling />
      </section>
      <section >
        <Browse />
      </section>
      <section className="flex justify-center">
        <Customer/>
      </section>
    </main>
  );
}
