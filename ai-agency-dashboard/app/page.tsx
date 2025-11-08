'use client';

import { useState } from 'react';
import {
  Bot,
  TrendingUp,
  Users,
  DollarSign,
  Activity,
  Clock,
  CheckCircle,
  AlertCircle,
  Zap,
  BarChart3,
  Settings,
  FileText,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    {
      label: 'Active Automations',
      value: '47',
      change: '+12%',
      trend: 'up',
      icon: Bot,
      color: 'bg-blue-500'
    },
    {
      label: 'Total Clients',
      value: '23',
      change: '+5%',
      trend: 'up',
      icon: Users,
      color: 'bg-green-500'
    },
    {
      label: 'Monthly Revenue',
      value: '$45.2K',
      change: '+18%',
      trend: 'up',
      icon: DollarSign,
      color: 'bg-purple-500'
    },
    {
      label: 'Success Rate',
      value: '98.5%',
      change: '+2.1%',
      trend: 'up',
      icon: TrendingUp,
      color: 'bg-orange-500'
    },
  ];

  const recentAutomations = [
    { id: 1, name: 'Email Campaign AI', client: 'TechCorp Inc.', status: 'running', tasks: 1247, successRate: 99.2 },
    { id: 2, name: 'Lead Generation Bot', client: 'Marketing Pro', status: 'running', tasks: 3421, successRate: 97.8 },
    { id: 3, name: 'Data Processing Pipeline', client: 'DataFlow LLC', status: 'paused', tasks: 892, successRate: 98.5 },
    { id: 4, name: 'Customer Support AI', client: 'ServiceHub', status: 'running', tasks: 5632, successRate: 99.7 },
    { id: 5, name: 'Social Media Manager', client: 'BrandWorks', status: 'running', tasks: 2156, successRate: 96.4 },
  ];

  const recentActivity = [
    { id: 1, action: 'New automation deployed', client: 'TechCorp Inc.', time: '5 minutes ago', type: 'success' },
    { id: 2, action: 'Automation paused', client: 'DataFlow LLC', time: '23 minutes ago', type: 'warning' },
    { id: 3, action: 'Monthly report generated', client: 'Marketing Pro', time: '1 hour ago', type: 'info' },
    { id: 4, action: 'Client onboarded', client: 'ServiceHub', time: '2 hours ago', type: 'success' },
    { id: 5, action: 'Performance threshold met', client: 'BrandWorks', time: '3 hours ago', type: 'success' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-slate-950/50 backdrop-blur-xl border-r border-slate-700/50 p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">AI Agency</h1>
            <p className="text-xs text-slate-400">Automation Platform</p>
          </div>
        </div>

        <nav className="space-y-2">
          {[
            { id: 'overview', label: 'Overview', icon: BarChart3 },
            { id: 'automations', label: 'Automations', icon: Bot },
            { id: 'clients', label: 'Clients', icon: Users },
            { id: 'reports', label: 'Reports', icon: FileText },
            { id: 'settings', label: 'Settings', icon: Settings },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                activeTab === item.id
                  ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-semibold text-white">System Status</span>
            </div>
            <p className="text-xs text-slate-300">All systems operational</p>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex-1 bg-slate-800 rounded-full h-1.5">
                <div className="bg-gradient-to-r from-blue-500 to-green-500 h-1.5 rounded-full" style={{width: '94%'}}></div>
              </div>
              <span className="text-xs text-slate-400">94%</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Dashboard Overview</h2>
              <p className="text-slate-400">Monitor your AI automation performance in real-time</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg px-4 py-2 flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-400" />
                <span className="text-sm text-slate-300">Last updated: 2 min ago</span>
              </div>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-all flex items-center gap-2">
                <Bot className="w-4 h-4" />
                New Automation
              </button>
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-slate-600/50 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className={`${stat.color} rounded-lg p-3`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`flex items-center gap-1 text-sm font-medium ${
                    stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {stat.trend === 'up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                    {stat.change}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-slate-400 text-sm">{stat.label}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Active Automations */}
          <div className="lg:col-span-2 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Bot className="w-5 h-5 text-blue-400" />
                Active Automations
              </h3>
              <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">View All</button>
            </div>
            <div className="space-y-4">
              {recentAutomations.map((automation) => (
                <div key={automation.id} className="bg-slate-900/50 border border-slate-700/30 rounded-lg p-4 hover:border-slate-600/50 transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-1">{automation.name}</h4>
                      <p className="text-slate-400 text-sm">{automation.client}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      automation.status === 'running'
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {automation.status === 'running' ? (
                        <span className="flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" />
                          Running
                        </span>
                      ) : (
                        <span className="flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          Paused
                        </span>
                      )}
                    </span>
                  </div>
                  <div className="flex items-center gap-6 text-sm">
                    <div>
                      <span className="text-slate-400">Tasks: </span>
                      <span className="text-white font-medium">{automation.tasks.toLocaleString()}</span>
                    </div>
                    <div>
                      <span className="text-slate-400">Success Rate: </span>
                      <span className="text-green-400 font-medium">{automation.successRate}%</span>
                    </div>
                  </div>
                  <div className="mt-3 bg-slate-800 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all"
                      style={{width: `${automation.successRate}%`}}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Activity className="w-5 h-5 text-purple-400" />
              Recent Activity
            </h3>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                    activity.type === 'success' ? 'bg-green-400' :
                    activity.type === 'warning' ? 'bg-yellow-400' : 'bg-blue-400'
                  }`}></div>
                  <div className="flex-1">
                    <p className="text-white text-sm font-medium mb-1">{activity.action}</p>
                    <p className="text-slate-400 text-xs">{activity.client}</p>
                    <p className="text-slate-500 text-xs mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-all cursor-pointer">
            <Bot className="w-8 h-8 text-blue-400 mb-3" />
            <h4 className="text-white font-semibold mb-2">Deploy New Automation</h4>
            <p className="text-slate-400 text-sm">Create and launch a new AI automation workflow</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all cursor-pointer">
            <Users className="w-8 h-8 text-purple-400 mb-3" />
            <h4 className="text-white font-semibold mb-2">Add Client</h4>
            <p className="text-slate-400 text-sm">Onboard a new client to your platform</p>
          </div>
          <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 rounded-xl p-6 hover:border-green-500/40 transition-all cursor-pointer">
            <FileText className="w-8 h-8 text-green-400 mb-3" />
            <h4 className="text-white font-semibold mb-2">Generate Report</h4>
            <p className="text-slate-400 text-sm">Create detailed performance analytics report</p>
          </div>
        </div>
      </main>
    </div>
  );
}
