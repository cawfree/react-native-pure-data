require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "react-native-pure-data"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.description  = <<-DESC
                  react-native-pure-data
                   DESC
  s.homepage     = "https://github.com/cawfree/react-native-pure-data"
  # brief license entry:
  s.license      = "MIT"
  # optional - use expanded license entry instead:
  # s.license    = { :type => "MIT", :file => "LICENSE" }
  s.authors      = { "Alex Thomas (@cawfree)" => "hello@cawfree.com" }
  s.platforms    = { :ios => "9.0" }
  s.source       = { :git => "https://github.com/cawfree/react-native-pure-data.git", :tag => "#{s.version}" }

  s.source_files = "ios/**/*.{h,c,m,swift}"
  s.requires_arc = true

  s.dependency "React"
  s.dependency "libpd-ios"
end

