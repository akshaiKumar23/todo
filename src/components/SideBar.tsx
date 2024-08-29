import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import AddTodoForm from "./AddTodoForm";
import Button from "./Button";

const SideBar = () => {
  const { login, register, isAuthenticated, user, logout, isLoading } =
    useKindeAuth();
  return (
    <section className="flex flex-col px-[25px] py-[18px] pb-[28px] col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/[0.08]">
      <AddTodoForm />
      <div className="mt-[auto] spacing-y-2">
        {isLoading ? null : isAuthenticated ? (
          <>
            <p>Logged in as {user?.given_name}</p>
            <Button
              onClick={logout}
              buttonText="Logout"
              buttonType="secondary"
            />
          </>
        ) : (
          <>
            <Button onClick={login} buttonText="Login" buttonType="secondary" />
            <Button
              onClick={register}
              buttonText="Register"
              buttonType="secondary"
            />
          </>
        )}
      </div>
    </section>
  );
};

export default SideBar;
