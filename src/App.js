import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaXTwitter, FaInstagram, FaTelegram } from "react-icons/fa6";
import { MdSimCardDownload } from "react-icons/md";
import "./App.css";
const navigation = [
  { name: "ماتریکس", href: "/" },
  { name: "ویژگی ها", href: "#features" },
  { name: "پلتفرم‌ها", href: "#platform" },
  { name: "دانلود", href: "#download" },
  { name: "فیلم و سریال", href: "#image" },
  { name: "شبکه ها", href: "#network" },
];
const stats = [
  { label: "لینک دانلود فیلم و سریال", value: "۱،۰۰۰،۰۰۰ +" },
  { label: "فیلم و سریال رایگان برای دانلود و تماشا", value: "۳۰،۰۰۰ +" },
  { label: "پروفایل بازیگران", value: "۲۰۰،۰۰۰ +" },
  { label: "فصل و قسمت سریال", value: "۱۰۰،۰۰۰ +" },
];

const downloads = [
  {
    name: "ماتریکس برای اندروید",
    title: "موبایل و تبلت",
    version: "1.0",
    button: "دانلود ماتریکس برای اندروید",
    link: "https://matrix.film",
  },
  {
    name: "ماتریکس برای iOS",
    title: "آیفون و آی‌پد",
    version: "1.0",
    button: "دانلود ماتریکس برای آیفون",
    link: "https://matrix.film",
  },
  {
    name: "ماتریکس برای اندروید تی‌وی",
    title: "تی‌وی و باکس",
    version: "1.0",
    button: "دانلود ماتریکس برای تی‌ وی",
    link: "https://matrix.film",
  },
  {
    name: "ماتریکس برای ویندوز",
    title: "کامپوتر(لپ‌تاپ) و تبلت",
    version: "1.0",
    button: "دانلود ماتریکس برای ویندوز",
    link: "https://matrix.film",
  },
  {
    name: "ماتریکس برای مک",
    title: "مک‌بوک و کامپیوترهای اپل",
    version: "1.0",
    button: "دانلود ماتریکس برای مک",
    link: "https://matrix.film",
  },
  {
    name: "ماتریکس برای لینوکس",
    title: "AppImage",
    version: "1.0",
    button: "دانلود ماتریکس برای لینوکس",
    link: "https://matrix.film",
  },
  {
    name: "ماتریکس برای webOS",
    title: "تلویزیون ها LG",
    version: "1.0",
    button: "دانلود ماتریکس برای وب‌او‌اس",
    link: "https://matrix.film",
  },
  {
    name: "ماتریکس برای TizenOS",
    title: "تلویزیون های سامسونگ",
    version: "1.0",
    button: "دانلود ماتریکس برای تایزن",
    link: "https://matrix.film",
  },
];

const footerNavigation = {
  social: [
    {
      name: "Instagram",
      href: "#",
      Icon: FaInstagram,
    },
    {
      name: "X",
      href: "#",
      Icon: FaXTwitter,
    },
    {
      name: "Telegram",
      href: "#",
      Icon: FaTelegram,
    },
  ],
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">برنامه ماتریکس</span>
              <img className="h-8 w-auto" src="/logo192.png" alt="اپ ماتریکس" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">منو</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              title="ماتریکس"
              href="https://matrix.film"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              ورود به ماتریکس <span aria-hidden="true">&larr;</span>
            </a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">ورودی ماتریکس</span>
                <img
                  className="h-8 w-auto"
                  src="/logo192.png"
                  alt="برنامه ماتریکس"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">بستن منو</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="https://matrix.film"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    ورود به ماتریکس
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10">
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-500 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
            />
          </svg>
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-br from-[#dd1f26] to-[#1f9bdd] opacity-40"
              style={{
                clipPath:
                  "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
              }}
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    اپلیکیشن ماتریکس Matrix
                  </h1>
                  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                    با ماتریکس، به دنیای بی‌حد و مرز فیلم و سریال قدم بگذارید و
                    از تماشای محتوای مورد علاقه خود در هر زمان و مکانی لذت به
                    ببرید و به مجموعه عظیمی از فیلم‌ها و سریال‌ها به صورت کاملا{" "}
                    <span className="text-red-600">رایگان</span> دسترسی داشته
                    باشید.
                  </p>
                  <p className="w-full text-center mt-10 font-light">
                    دیگر نیازی به اشتراک پلتفرم‌های VOD(سرویس های فیلم و سریال)
                    ندارید.
                  </p>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        src="/pzwwPYKgOvT1JPHGsgx6HbmB74W.webp"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        src="/pLmmd7dhMuya6Mso6Q2hOcX3owU.webp"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="/dLCFNE88yhbHelLvj2vpgbW3ZUI.webp"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        src="/iWFeyCxwmVMgZyGFWF2riynKrJ5.webp"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="/3MGQD4yXokufNlW1AyRXdiy7ytP.webp"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="/gP9yviboTGWGolqUZKIB1UkF1C2.webp"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="xl:mx-auto xl:max-w-7xl xl:px-8 space-y-5"
          id="platform"
        >
          <img
            src="/platforms.jpg"
            alt=""
            className=" w-full object-cover xl:rounded-t-3xl border border-[#e2e2e2]"
          />
        </div>
        <div
          className="xl:mx-auto xl:max-w-7xl xl:px-8 space-y-5 "
          id="download"
        >
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 bg-[#e2e2e2] xl:px-8 py-10 xl:rounded-b-3xl">
            {downloads.map((dl, index) => (
              <li
                key={index}
                className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
              >
                <div className="flex w-full items-center justify-between space-x-6 p-6">
                  <div className="flex-1 truncate">
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <h3 className="truncate text-sm font-medium text-gray-900">
                        {dl.name}
                      </h3>
                      <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs  text-green-700 ring-1 ring-inset ring-green-600/20 font-extralight">
                        {dl.version}
                      </span>
                    </div>
                    <p className="mt-1 truncate text-sm text-gray-500">
                      {dl.title}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="-mt-px flex divide-x divide-gray-200">
                    <div className="flex w-0 flex-1">
                      <a
                        title={`ماتریکس ${dl.name}`}
                        href={dl.link}
                        download={true}
                        className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-b-lg border border-transparent py-4 text-sm font-semibold text-gray-100 bg-neutral-800 hover:bg-neutral-700"
                      >
                        <MdSimCardDownload
                          className="h-5 w-5 text-[#dd1e24]"
                          aria-hidden="true"
                        />
                        {dl.button}
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto max-w-7xl px-6  lg:px-8 mt-20" id="features">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              برنامه ماتریکس
            </h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-xl leading-8 text-gray-600">
                  اپ ماتریکس برای همه سلیقه‌ها و همه دستگاه‌ها مناسب است. فرقی
                  نمی‌کند که از چه نوع فیلم و سریالی لذت می‌برید یا از چه
                  دستگاهی استفاده می‌کنید، ماتریکس بهترین تجربه تماشای فیلم و
                  سریال را برای شما فراهم می‌کند.
                </p>
                <p className="text-xl leading-8 text-gray-600 mt-10">
                  از{" "}
                  <span className="underline decoration-dashed underline-offset-8 decoration-neutral-400">
                    زیرنویس و دوبله فارسی
                  </span>{" "}
                  برای فیلم‌ها و سریال‌های خارجی استفاده کنید.
                </p>
                <p className="text-xl leading-8 text-gray-600 mt-10">
                  فیلم و سریال مورد نظر خود را با کیفیت‌های مختلف دانلود یا به
                  صورت آنلاین تماشا کنید.
                </p>
                <p className="text-xl leading-8 text-gray-600 mt-10">
                  از دسته‌بندی‌های متنوع ژانر، موضوع و سال انتشار برای جستجوی
                  سریع و آسان استفاده کنید.
                </p>
                <p className="text-xl leading-8 text-gray-600 mt-10">
                  به جدیدترین فیلم‌ها و سریال‌ها به محض انتشار دسترسی خواهید
                  داشت.
                </p>
              </div>
              <div className="lg:flex lg:flex-auto lg:justify-center">
                <dl className="w-64 space-y-4 xl:w-80">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col-reverse gap-y-4"
                    >
                      <dt className="text-base leading-7 text-gray-600">
                        {stat.label}
                      </dt>
                      <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8 space-y-5"
          id="image"
        >
          <img
            src="/v8zOcynvSd6IW3FzZrvst2HJ53s.webp"
            alt=""
            className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
          />
          <img
            src="/7lcwCb9DqQxffR5xdJZPOsxkxPL.webp"
            alt=""
            className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
          />
          <img
            src="/aD45cQp7nUYHIZFOllikXoAJbIA.webp"
            alt=""
            className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
          />
        </div>

        <div className="relative isolate -z-10 mt-32 sm:mt-48" id="network">
          <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
            <svg
              className="h-[40rem] w-[80rem] flex-none stroke-gray-200"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
                  width={200}
                  height={200}
                  x="50%"
                  y="50%"
                  patternUnits="userSpaceOnUse"
                  patternTransform="translate(-100 0)"
                >
                  <path d="M.5 200V.5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y="50%" className="overflow-visible fill-gray-50">
                <path
                  d="M-300 0h201v201h-201Z M300 200h201v201h-201Z"
                  strokeWidth={0}
                />
              </svg>
              <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"
              />
            </svg>
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
              بیش از ۱۰۰ هزار قسمت فیلم و سریال از همه شبکه ها و کمپانی های
              تولید کننده
            </h2>
            <img
              className="col-span-2  w-full object-contain lg:col-span-1 rounded-3xl mt-10"
              src="/networks.jpg"
              alt="tv netwroks"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mx-auto mt-20 max-w-7xl overflow-hidden px-6 pb-20 sm:mt-20 sm:pb-24 lg:px-8">
        <div className="mt-10 flex justify-center space-x-10" dir="ltr">
          {footerNavigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.Icon />
            </a>
          ))}
        </div>
        <p
          className="mt-10 text-center text-xs leading-5 text-gray-500"
          dir="ltr"
        >
          &copy; {new Date().getFullYear()} The Matrix App. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
