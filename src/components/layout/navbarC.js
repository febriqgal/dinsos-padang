import { auth } from "@/db/firebase";
import { Dropdown, Navbar, Text } from "@nextui-org/react";
import { signOut } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import DefaultPicture from "../../../public/default.png";
import Dinsos from "../../../public/dinsos.png";
import { useUser } from "@/context/user";
export default function NavbarC() {
  const { uid, email } = useUser();
  const route = useRouter();
  const user = auth.currentUser;
  const Navigation = [
    {
      title: "Beranda",
      href: "/",
      icon: (props) => (
        <svg
          {...props}
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M3 9.84719C3 8.99027 3.36644 8.17426 4.00691 7.60496L9.34255 2.86217C10.8581 1.51502 13.1419 1.51502 14.6575 2.86217L19.9931 7.60496C20.6336 8.17426 21 8.99027 21 9.84719V18C21 20.2091 19.2091 22 17 22H7C4.79086 22 3 20.2091 3 18V9.84719Z"
          />
          <path
            d="M10 18H14"
            stroke="#28303F"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Berita",
      href: "/berita",
      icon: (props) => (
        <svg
          {...props}
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 8H18V20C18 21.1046 18.8954 22 20 22C21.1046 22 22 21.1046 22 20V10C22 8.89543 21.1046 8 20 8Z" />
          <path
            opacity="0.4"
            d="M15 2H5C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H20C18.8954 22 18 21.1046 18 20V5C18 3.34315 16.6569 2 15 2Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.25 7C5.25 6.58579 5.58579 6.25 6 6.25H14C14.4142 6.25 14.75 6.58579 14.75 7C14.75 7.41421 14.4142 7.75 14 7.75H6C5.58579 7.75 5.25 7.41421 5.25 7Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25L14 11.25C14.4142 11.25 14.75 11.5858 14.75 12C14.75 12.4142 14.4142 12.75 14 12.75L6 12.75C5.58579 12.75 5.25 12.4142 5.25 12Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.25 17C5.25 16.5858 5.58579 16.25 6 16.25H10C10.4142 16.25 10.75 16.5858 10.75 17C10.75 17.4142 10.4142 17.75 10 17.75H6C5.58579 17.75 5.25 17.4142 5.25 17Z"
          />
        </svg>
      ),
    },
    {
      title: "Profil Dinas",
      href: "/profil-dinas",
      icon: (props) => (
        <svg
          {...props}
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M2 8.00027C2 6.8957 2.89543 6.00027 4 6.00027H6.29844C6.75258 6.00027 7.1932 5.84571 7.54783 5.56201L10.7506 2.99979C11.481 2.41544 12.519 2.41544 13.2494 2.99979L16.4522 5.56201C16.8068 5.84571 17.2474 6.00027 17.7016 6.00027H20C21.1046 6.00027 22 6.8957 22 8.00027V20.0003C22 21.1048 21.1046 22.0003 20 22.0003H4C2.89543 22.0003 2 21.1048 2 20.0003V8.00027Z"
          />
          <path d="M9 18C9 16.3431 10.3431 15 12 15C13.6569 15 15 16.3431 15 18V22H9V18Z" />
          <path d="M14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12C13.1046 12 14 11.1046 14 10Z" />
        </svg>
      ),
    },

    {
      title: "Pengaduan",
      href: "/pengaduan",
      icon: (props) => (
        <svg
          {...props}
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20 13.1707C19.6872 13.0602 19.3506 13 19 13H18C17.3705 13 16.7777 13.2964 16.4 13.8L15.2 15.4C14.4446 16.4072 13.259 17 12 17C10.741 17 9.55542 16.4072 8.8 15.4L7.6 13.8C7.22229 13.2964 6.62951 13 6 13H5C4.64936 13 4.31278 13.0602 4 13.1707V6C4 3.79086 5.79086 2 8 2H16C18.2091 2 20 3.79086 20 6V13.1707ZM9 9.25C8.58579 9.25 8.25 9.58579 8.25 10C8.25 10.4142 8.58579 10.75 9 10.75H12C12.4142 10.75 12.75 10.4142 12.75 10C12.75 9.58579 12.4142 9.25 12 9.25H9ZM8.25 6C8.25 5.58579 8.58579 5.25 9 5.25H15C15.4142 5.25 15.75 5.58579 15.75 6C15.75 6.41421 15.4142 6.75 15 6.75H9C8.58579 6.75 8.25 6.41421 8.25 6Z"
          />
          <path
            opacity="0.4"
            d="M22 19V16C22 14.3431 20.6569 13 19 13H18C17.3705 13 16.7777 13.2964 16.4 13.8L15.2 15.4C14.4446 16.4072 13.259 17 12 17C10.741 17 9.55542 16.4072 8.8 15.4L7.6 13.8C7.22229 13.2964 6.62951 13 6 13H5C3.34315 13 2 14.3431 2 16V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19Z"
          />
        </svg>
      ),
    },
    {
      title: "Download",
      href: "/download",
      icon: (props) => (
        <svg
          {...props}
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M3 6L3 18C3 20.2091 4.79086 22 7 22H13L21 14V6C21 3.79086 19.2091 2 17 2L7 2C4.79086 2 3 3.79086 3 6Z"
          />
          <path d="M13 18L13 22L21 14L17 14C14.7909 14 13 15.7909 13 18Z" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.75 10.1718C12.7967 10.1368 12.8414 10.098 12.8839 10.0555L14.4697 8.46973C14.7626 8.17683 15.2374 8.17683 15.5303 8.46973C15.8232 8.76262 15.8232 9.23749 15.5303 9.53039L13.9445 11.1162C12.8706 12.1901 11.1294 12.1901 10.0555 11.1162L8.46967 9.53039C8.17678 9.23749 8.17678 8.76262 8.46967 8.46973C8.76256 8.17683 9.23744 8.17683 9.53033 8.46973L11.1161 10.0555C11.1586 10.098 11.2033 10.1368 11.25 10.1718L11.25 6.00006C11.25 5.58584 11.5858 5.25006 12 5.25006C12.4142 5.25006 12.75 5.58584 12.75 6.00006L12.75 10.1718Z"
          />
        </svg>
      ),
    },
  ];

  return (
    <Navbar
      className="shadow-2xl shadow-sky-100"
      disableBlur
      variant="static"
      maxWidth={"fluid"}
    >
      <Navbar.Toggle showIn="xs" />
      <Navbar.Brand
        css={{
          "@xs": {
            w: "12%",
          },
        }}
      >
        <Navbar.Content>
          <Link
            href={"/"}
            title={"Beranda Dinas Sosial Padang"}
            className="w-[250px] lg:w-[400px]"
          >
            <Image src={Dinsos} alt="#" />
          </Link>
        </Navbar.Content>
        {/* <Text b color="inherit" hideIn="xs">
            ACME
        </Text> */}
      </Navbar.Brand>

      <Navbar.Content
        css={{
          "@xs": {
            jc: "flex-end",
          },
        }}
      >
        <div className="hidden lg:flex lg:gap-4 place-items-center text-sm">
          {Navigation.map((e, i) => {
            return (
              <Link
                className={
                  route.pathname === e.href
                    ? "text-sky-900 font-bold"
                    : "hover:text-slate-900"
                }
                key={i}
                href={e.href}
              >
                <div className="flex gap-1 items-center fill">
                  <e.icon className="h-6 w-6 " />
                  {e.title}
                </div>
              </Link>
            );
          })}
          {/* <Dropdown>
            <Dropdown.Button
              className="p-0 font-normal text-sm"
              color={""}
              flat
            >
              Publikasi
            </Dropdown.Button>
            <Dropdown.Menu aria-label="Dynamic Actions" items={menuItems}>
              {(item) => (
                <Dropdown.Item
                  key={item.key}
                  color={item.key === "delete" ? "error" : "default"}
                >
                  {item.name}
                </Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown> */}
        </div>
        <Dropdown placement="bottom-right">
          <Navbar.Item>
            <Dropdown.Trigger>
              <Image
                alt="#"
                className="hover:cursor-pointer border-2 rounded-full"
                height={40}
                src={DefaultPicture}
              />
            </Dropdown.Trigger>
          </Navbar.Item>
          <Dropdown.Menu
            aria-label="User menu actions"
            color="warning"
            onAction={async (actionKey) => {
              if (actionKey === "") {
                await signOut(auth);
                route.replace("/");
              }
              if (actionKey === "profile") {
              } else {
                route.push(`/${actionKey}`);
              }
            }}
          >
            <Dropdown.Item key="profile" css={{ height: "$18" }}>
              <Text b color="inherit" css={{ d: "flex" }}>
                {user?.displayName ?? "-"}
              </Text>
              <Text b color="inherit" css={{ d: "flex" }}>
                {user?.email ?? "-"}
              </Text>
            </Dropdown.Item>
            {email != "admin@dinsos.com" ? null : (
              <Dropdown.Item key="admin" withDivider>
                Dashboard Admin
              </Dropdown.Item>
            )}
            {!user ? null : (
              <Dropdown.Item key="edit-profile/ganti-nama">
                Edit Nama
              </Dropdown.Item>
            )}
            {!user ? null : (
              <Dropdown.Item key="edit-profile/ganti-password">
                Edit Password
              </Dropdown.Item>
            )}

            {user ? (
              <Dropdown.Item key="" withDivider color="error">
                Keluar
              </Dropdown.Item>
            ) : (
              <Dropdown.Item key="login" withDivider color="error">
                Login
              </Dropdown.Item>
            )}
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Content>
      <Navbar.Collapse disableAnimation>
        {Navigation.map((e, i) => (
          <Navbar.CollapseItem
            key={i}
            activeColor="warning"
            css={{
              color: i === Navigation.length - 1 ? "$error" : "",
            }}
            isActive={i === 2}
          >
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href={e.href}
            >
              {e.title}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
