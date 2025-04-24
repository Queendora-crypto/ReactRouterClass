import Header from "~/components/Header";
import office from "~/img/company_meeting.png";

export default function About() {
  return (
    <>
      <Header />
      <main className={"about"}>
        <h1>About us</h1>
        <p>
          To give you information about a company, I need you to tell me which
          company you're interested in! Please provide me with: The company's
          name: (e.g., Apple, Google, Coca-Cola) Location (if relevant): (e.g.,
          specific city, country) Industry: (e.g., technology, food and
          beverage, retail) Once I have this information, I can provide details
          such as: Company history Products and services Financial performance
          Company culture Recent news and developments And much more! For
          example, if you ask about "Apple," I can tell you about their history,
          their products (like iPhones and Macs), their financial performance,
          and their current projects. I look forward to helping you learn more
          about the company you're interested in.For example, if you ask about
          "Apple," I can tell you about their history, their products (like
          iPhones and Macs), their financial performance, and their current
          projects.I look forward to helping you learn more about the company
          you're interested in.For example, if you ask about "Apple," I can tell
          you about their history, their products (like iPhones and Macs), their
          financial performance, and their current projects. I look forward to
          helping you learn more about the company you're interested in.
        </p>
        <img src={office} alt={"staff_meeting"} />
      </main>
    </>
  );
}
