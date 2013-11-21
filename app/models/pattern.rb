class Pattern < ActiveRecord::Base
	has_many :projects
	has_many :versions
  accepts_nested_attributes_for :sizes, :allow_destroy => true

	validates :title, presence: true
	validates :description, presence: true
	validates :gauge, presence: true
	validates :needles, presence: true
	validates :yarn, presence: true
end
