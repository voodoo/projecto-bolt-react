import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useTheme } from "@/providers/theme-provider";

export function PreferenceSettings() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="grid gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
          <CardDescription>
            Customize how the dashboard looks and feels
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="theme">Theme</Label>
            <Select value={theme} onValueChange={(value: "light" | "dark" | "system") => setTheme(value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="dense-mode">Dense Mode</Label>
            <Switch id="dense-mode" />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Dashboard</CardTitle>
          <CardDescription>
            Customize your dashboard layout and widgets
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="analytics">Show Analytics</Label>
            <Switch id="analytics" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="recent-activity">Show Recent Activity</Label>
            <Switch id="recent-activity" defaultChecked />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}