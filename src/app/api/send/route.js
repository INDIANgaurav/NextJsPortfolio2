// import { NextResponse } from "next/server";
// import { Resend } from "resend";
// // import { mailOptions } from "./nodemailer";

// const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;

// export async function POST(req, res) {
//   const { email, subject, message } = await req.json();
//   console.log(email, subject, message);
//   console.log("i m here")
//   try {
//     const data = await resend.emails.send({
//       from: fromEmail,
//       to: [email],
//       subject: subject,
//       react: (
//         <>
//           <h1>{subject}</h1>
//           <p>Thank you for contacting us!</p>
//           <p>New message submitted:</p>
//           <p>{message}</p>
//         </>
//       ),
//     });
//     return res.json(data);
//   } catch (error) {
//     return res.json({ error });
//   }
// }




// // export async function POST(req, res)  {

// //  if( req.method === "POST"){
// //   const data = await req.json() ;
// //   console.log("your data " + data)
// //   if(!data.email || !data.subject || !data.message){
// //     return res.status(400).json({
// //       message:"please fill all the fields",
// //     })
// //   }


// //   try{
// //     await transporter.sendMail({
// //       ...mailOptions,
// //       subject: data.subject,
// //       text:"this is a test string",
// //       html:"<h1>test title</h1> <p>some body text</p>"

// //     })

// //     return res.status(200).json({
// //       message:"email sent",
// //     })
// //   }catch(error){
// //     console.log(error)
// //     return res.status(400).json({
// //       message:error.message,
// //     })
// //   }

// //  }
// //   res.status(400).json({
// //     message:"bad request",
// //   })


// // }

 