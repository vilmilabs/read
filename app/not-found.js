import Link from 'next/link'

export default function NotFound() {
  return <main
      className="text-center"
      style={{
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          color: "white",
          fontSize: "36px",
        }}
      >
        Sorry, the page you requested could not be found
        <br/>
        Code: 404 & <Link href='/code/v9nf' >v9nf</Link>
      </h1>
      <h4 style={{ fontSize: "26px", color: "purple" }}>
        Powered by VilmiLabs & Vilmao
      </h4>
      <p style={{ fontSize: "20px" }}>
        Go <Link href={"/"}>Home</Link>
        <br></br>
        Go back to<Link href={"/archive"}> /archive</Link>
        <br></br>
        © 2025 <Link href="https://linktr.ee/vilmao_" className='underline text-violet-500'> Vilmao</Link>. All rights Reserved.
      </p>
    </main>
}