# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "bay_jekyll_theme"
  spec.version       = "1.2.2"
  spec.authors       = ["ajsaestheticjourneys"]
  spec.email         = ["your-email@example.com"] # Replace with your actual email

  spec.summary       = %q{A simple and minimal Jekyll theme.}
  spec.homepage      = "https://github.com/ajsaestheticjourneys/"
  spec.license       = "MIT"

  spec.required_ruby_version = ">= 3.3.0"

  spec.files         = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r{^((assets|_includes|_layouts|_sass|_config.yml|index.html|404.html))|(LICENSE|README|CHANGELOG)((\.txt|\.md|\.markdown|\.js|\.css|\.scss|\.png|\.jpg|\.ico|\.svg|\.yml|\.html|\.json|\.xml|\.gif|\.woff2|\.woff|\.ttf|\.eot)$)}i)
  end

  spec.add_development_dependency "jekyll", "~> 4.3.4"
  spec.add_development_dependency "bundler", "~> 2.0"
end