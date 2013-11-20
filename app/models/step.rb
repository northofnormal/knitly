class Step < ActiveRecord::Base
	belongs_to :size

	validates :order, presence: true
	validates :action, presence: true
	validates :position, presence: true
end