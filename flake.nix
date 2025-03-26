{
  description = "Dev shell with Node.js";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";

  outputs = { self, nixpkgs, ... }:
    let
      system = "x86_64-linux";  # Adjust for your system if needed
      pkgs = import nixpkgs {
        inherit system;
        config = { allowUnfree = true; };
      };
    in {
      devShells.${system}.default = pkgs.mkShell {
        buildInputs = [ pkgs.nodejs_23 ];

        shellHook = ''
          echo "Welcome to the Node.js development shell!"
        '';
      };
    };
}
