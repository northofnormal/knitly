class Step < ActiveRecord::Base
	belongs_to :version

	validates :order, presence: true
	validates :action, presence: true
	validates :position, presence: true
end