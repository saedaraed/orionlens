import { useEffect, useState, useRef } from "react";
import "../globals.css";
import Image from "next/image";

export default function HeroSection() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null); // تعريف مرجع للإطار المدمج
  const [showImage, setShowImage] = useState(false); // حالة لعرض الصورة
  const [showTitle, setShowTitle] = useState(false); // حالة لعرض العنوان
  const [showNewPage, setShowNewPage] = useState(false); // حالة لعرض الصفحة الجديدة

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  const text = `في اللحظة التي أصبحت السماء قريبة والأرض موحشة. نحن بقايا قصص الحرب، أولئك الذين ظلوا في الخط الأمامي، نواجه الرعب بوجوه لم تعد تحمل سوى انعكاس اّلام بلادنا.
  هذا الكتاب ليس مجرد سرد لحكايات، بل هو شهادة حية على ما خلفته الحرب في نفوسنا. وجوهنا هي مرآة للألم الذي امتد عميقًا في قلوبنا، وصوتنا هو صوت من فقدوا، من عاشوا، ومن ما زالوا يحاولون النجاة.
  كل صفحة تحمل همسات لا يسمعها إلا من مرّ بهذا الألم. إنها أصوات الأشخاص الذين عاشوا بين الدمار، واستمروا في البحث عن الأمل وسط الغبار. هذه الأصوات ليست فقط عن الشهداء، بل عن الأحياء الذين يمشون بيننا حاملين جراحًا لا تُرى بالعين، لكنها تُشعر بكل نبضة في القلب.
  هنا، نحكي عن الفقدان، عن الانكسار، وعن صرخات لم تجد من يسمعها. نحكي عن الصمود الذي يختبئ وراء كل وجه، وعن الأحلام التي ضاعت بين الأنقاض. "أصوات في الخط الأمامي" هي أصواتنا نحن، من عاشوا هذه الحرب، ومن يواصلون النضال للبقاء على قيد الحياة.`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }
    }, 50);

    return () => clearTimeout(timeout); // تنظيف التوقيت
  }, [index, text]);

  useEffect(() => {
    const imageTimer = setTimeout(() => setShowImage(true), 2000);
    const titleTimer = setTimeout(() => setShowTitle(true), 4000);
    const pageTimer = setTimeout(() => setShowNewPage(true), 30000);

    return () => {
      clearTimeout(imageTimer);
      clearTimeout(titleTimer);
      clearTimeout(pageTimer);
    };
  }, []);

  return (
    <>
      {showNewPage ? (
        <div
          className="new-page"
          style={{
            backgroundColor: "#000000",
            color: "grey",
            textAlign: "center",
            padding: "20px",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              maxWidth: "70%",
              margin: "0 auto",
              whiteSpace: "pre-wrap",
            }}
          >
            {displayedText}
          </p>
        </div>
      ) : (
        <div
          className="relative bg-cover bg-norepeat bg-center w-[100%]"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 1) 70%)",
            padding: "20px",
            borderRadius: "10px",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <div>
            <iframe
              width="100%"
              height="300"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/845591875&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              ref={iframeRef}
              style={{ display: "none" }}
            ></iframe>
          </div>

          {showImage && (
            <div
              className="absolute"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                animation: "moveImage 2s ease-out",
              }}
            >
              <Image src="/images/sample.png" alt="Sample" />
            </div>
          )}

          {showTitle && (
            <div
              className="absolute z-10 container mx-auto px-4 flex flex-col justify-center items-center h-screen w-full text-white"
              style={{
                animation: "moveTitle 1.5s ease-out",
              }}
            >
              <h1 className="text-[60px] font-extrabold text-white leading-tight text-center mt-12 text-shadow-lg">
                أصوات في الخط الأمامي
              </h1>
            </div>
          )}
        </div>
      )}

      <style jsx>{`
        @keyframes moveImage {
          0% {
            transform: translate(-50%, -50%) scale(0.5);
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
          }
        }

        @keyframes moveTitle {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
