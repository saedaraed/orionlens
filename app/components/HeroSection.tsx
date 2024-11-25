import { useEffect, useState, useRef } from "react";
import Navigation from "./Navigation";
import '../globals.css';

export default function HeroSection() {
  const iframeRef = useRef<HTMLIFrameElement>(null); // تعريف مرجع للإطار المدمج
  const [showImage, setShowImage] = useState(false);  // حالة لعرض الصورة
  const [showTitle, setShowTitle] = useState(false);  // حالة لعرض العنوان
  const [showNewPage, setShowNewPage] = useState(false);  // حالة لعرض الصفحة الجديدة

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  
  // نص سيتم عرضه تدريجيًا
  const text = `في اللحظة التي أصبحت السماء قريبة والأرض موحشة. نحن بقايا قصص الحرب، أولئك الذين ظلوا في الخط الأمامي، نواجه الرعب بوجوه لم تعد تحمل سوى انعكاس اّلام بلادنا.
  هذا الكتاب ليس مجرد سرد لحكايات، بل هو شهادة حية على ما خلفته الحرب في نفوسنا. وجوهنا هي مرآة للألم الذي امتد عميقًا في قلوبنا، وصوتنا هو صوت من فقدوا، من عاشوا، ومن ما زالوا يحاولون النجاة.
  كل صفحة تحمل همسات لا يسمعها إلا من مرّ بهذا الألم. إنها أصوات الأشخاص الذين عاشوا بين الدمار، واستمروا في البحث عن الأمل وسط الغبار. هذه الأصوات ليست فقط عن الشهداء، بل عن الأحياء الذين يمشون بيننا حاملين جراحًا لا تُرى بالعين، لكنها تُشعر بكل نبضة في القلب.
  هنا، نحكي عن الفقدان، عن الانكسار، وعن صرخات لم تجد من يسمعها. نحكي عن الصمود الذي يختبئ وراء كل وجه، وعن الأحلام التي ضاعت بين الأنقاض. "أصوات في الخط الأمامي" هي أصواتنا نحن، من عاشوا هذه الحرب، ومن يواصلون النضال للبقاء على قيد الحياة.`;

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      } else {
        clearInterval(interval);
      }
    }, 50); // التأخير بين كل حرف وحرف

    return () => clearInterval(interval);
  }, [index]);

  useEffect(() => {
    // تأخير لعرض الصورة بعد 2 ثانية
    const imageTimer = setTimeout(() => {
      setShowImage(true);
    }, 2000);

    // تأخير لعرض العنوان بعد 4 ثوانٍ
    const titleTimer = setTimeout(() => {
      setShowTitle(true);
    }, 4000);

    // تأخير لإخفاء الصفحة الحالية بعد 30 ثانية وعرض الصفحة الجديدة
    const pageTimer = setTimeout(() => {
      setShowNewPage(true); // تغيير الحالة لعرض الصفحة الجديدة
    }, 30000); // 30 ثانية

    // تنظيف المؤقتات عند تفريغ المكون
    return () => {
      clearTimeout(imageTimer);
      clearTimeout(titleTimer);
      clearTimeout(pageTimer);
    };
  }, []); // مصفوفة فارغة لتشغيل التأثير مرة واحدة عند تحميل المكون

  return (
    <>
      {showNewPage ? (
        // الصفحة الجديدة التي ستظهر بعد 30 ثانية
        <div className="new-page" style={{
backgroundColor:"#000000",
          color: "grey",               // تعيين اللون الرمادي للنص
          textAlign: "center",         // محاذاة النص إلى المنتصف
          padding: "20px",             // إضافة حواف للنص من جميع الجوانب
          height: "100vh",             // تأكيد أن ارتفاع الصفحة يغطي كامل الشاشة
          display: "flex",             // استخدام Flexbox لترتيب العناصر في المنتصف
          justifyContent: "center",    // محاذاة المحتوى أفقيًا في المنتصف
          alignItems: "center",        // محاذاة المحتوى عموديًا في المنتصف
          overflow: "hidden",          // لضمان عدم وجود التمرير
        }}>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              maxWidth: "70%",
              margin: "0 auto",
              whiteSpace: "pre-wrap", // للحفاظ على الفواصل بين الأسطر
            }}
          >
            {displayedText}
          </p>
        </div>
      ) : (
        // الصفحة الأصلية التي ستختفي بعد 30 ثانية
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
            <div
              style={{
                fontSize: "10px",
                color: "#cccccc",
                lineBreak: "anywhere",
                wordBreak: "normal",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                fontFamily:
                  "Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif",
                fontWeight: 100,
              }}
            >
              <a
                href="https://soundcloud.com/lonely_table"
                title="lonely table"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#cccccc", textDecoration: "none" }}
              >
                lonely table
              </a>{" "}
              ·{" "}
              <a
                href="https://soundcloud.com/lonely_table/u9d72iorflxk"
                title="ألن نلتقي؟"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#cccccc", textDecoration: "none" }}
              >
                ألن نلتقي؟
              </a>
            </div>
          </div>

          {/* عرض الصورة مع تأثير التحرك */}
          {showImage && (
            <div
              className="absolute"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                animation: "moveImage 2s ease-out", // إضافة تأثير التحرك للصورة
              }}
            >
              <img src="/images/1ed49714-e3e5-499b-ac3e-a3b350fc848f.png" alt="" />
            </div>
          )}

          {/* عرض العنوان مع تأثير التحرك من الأسفل */}
          {showTitle && (
            <div
              className="absolute z-10 container mx-auto px-4 flex flex-col justify-center items-center h-screen w-full text-white"
              style={{
                animation: "moveTitle 1.5s ease-out", // إضافة تأثير التحرك للعنوان
              }}
            >
              <h1 className="text-[60px] font-extrabold text-white leading-tight text-center mt-12 text-shadow-lg">
                أصوات في الخط الأمامي
              </h1>
            </div>
          )}

          <div className="relative z-10 container mx-auto px-4 flex flex-col justify-end pb-[100px] items-start h-screen w-full text-white">
            <p className=" text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
              {/* شهادات من أعماق الروح */}
            </p>
          </div>
        </div>
      )}

      {/* إضافة CSS لتأثير التحرك للصورة والعنوان */}
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
