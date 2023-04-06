import React, { useEffect } from "react";

import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "config/supabase_config";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  //   useEffect(() => {

  //     const fetch = async () => {
  //       const {
  //         data: { session },
  //       } = await supabase.auth.getSession();

  //       if (session) {
  //         navigate(location?.state?.return_url || "/", {
  //             replace: true
  //         });
  //       }
  //     };
  //     fetch()
  //   }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
          providers={["google"]}
        />
      </header>
    </div>
  );
}

export default Login;
