class SessionsController < ApplicationController
  def new
  end

  def create
    user = login(params[:username], params[:password], params[:remember_me])
    
    if user
      redirect_to patterns_path :notice => "Welcome back!"
    else 
      flash.now.alert = "Username or password is incorrect"
      render :new
    end
  end

  def destroy
    logout

    redirect_to root_url, :notice => "Goodbye!"
  end
end
