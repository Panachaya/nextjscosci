"use client";


import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { authClient } from "@/lib/auth-client"; //import the auth client
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email("รูปแบบอีเมลล์ไม่ถูกต้อง"),
  password: z.string().min(6, "รหัสผ่านต้องอย่างน้อย 6 ตัวอักษร"),
});

const Signup01Page = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (form: z.infer<typeof formSchema>) => {
    await authClient.signUp.email({
      name:"Your Name",
        email: form.email, // user email address
        password: form.password, // user password -> min 6 characters by default
    }, {
        onRequest: (ctx) => {
            //show loading
            console.log(ctx.body);
        },
        onSuccess: (ctx) => {
            //redirect to the dashboard or sign in page
            console.log(ctx.data)
            router.replace('/login');
        },
        onError: (ctx) => {
            // display the error message
            alert(ctx.error.message);
        },
});
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-xs w-full flex flex-col items-center">
       
        <p className="mt-4 text-xl font-bold tracking-tight">
          Log in to Shadcn UI Blocks
        </p>
          <Form {...form}>
          <form
            className="w-full space-y-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Email"
                      className="w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Password"
                      className="w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="mt-4 w-full">
              ลงทะเบียน
            </Button>
          </form>
        </Form>

      <div className="mt-5 space-y-5">
          <p className="text-sm text-center">
            คุณมี Account ในระบบแล้วใช่ไหม
            <Link href="/signup" className="ml-1 underline text-muted-foreground">
              เข้าสู่ระบบ
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Signup01Page;
