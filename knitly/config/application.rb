require File.expand_path('../boot', __FILE__)

require 'rails/all'

Bundler.require(:default, Rails.env)

module Knitly
  class Application < Rails::Application
    config generators do |g|
        g.test_framework :rspec, :fixture => false
    end
  end
end
