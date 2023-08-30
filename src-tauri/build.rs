use std::env;



// development needed for other platforms.



// linux.
fn build_linux() -> () {
  build_default();
}

// macos.
fn build_macos() -> () {
  build_default();
}

// ios.
fn build_ios() -> () {
  build_default();
}

// freebsd.
fn build_free_bsd() -> () {
  build_default();
}

// dragonfly.
fn build_dragonfly() -> () {
  build_default();
}

// netbsd.
fn build_net_bsd() -> () {
  build_default();
}

// openbsd.
fn build_open_bsd() -> () {
  build_default();
}

// solaris.
fn build_solaris() -> () {
  build_default();
}

// android.
fn build_android() -> () {
  build_default();
}

// windows.
fn build_windows() -> () {
  build_default();
}

// default build function.
fn build_default() -> () {
  // nothing yet...
}



fn main() {
  let os: &str = env::consts::OS;

  if      os == "linux"     { build_linux();     }
  else if os == "macos"     { build_macos();     }
  else if os == "ios"       { build_ios();       }
  else if os == "freebsd"   { build_free_bsd();  }
  else if os == "dragonfly" { build_dragonfly(); }
  else if os == "netbsd"    { build_net_bsd();   }
  else if os == "openbsd"   { build_open_bsd();  }
  else if os == "solaris"   { build_solaris();   }
  else if os == "android"   { build_android();   }
  else if os == "windows"   { build_windows();   }

  tauri_build::build();
}